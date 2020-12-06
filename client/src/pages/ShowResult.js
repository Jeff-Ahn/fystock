import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import Card from '../components/common/Card';
import GlobalLayout from '../components/base/GlobalLayout';
import Pagination from '../components/common/Pagination';
import FinancialStatements from '../components/FinancialStatements/FinancialStatements';
import { useSelector } from 'react-redux';

import { MOBILE_MAX_WIDTH } from '../domain/constants';
import stocksApi from '../api/stock';

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  max-width: ${MOBILE_MAX_WIDTH};
  margin: 2rem;
`;

const CardsBlock = styled.div`
  margin: 0 auto;
  height: 28rem;
`;

const LoadingBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13rem;
  font-size: 2rem;
`;

const ShowResult = () => {
  const filters = useSelector((state) => state.filters);
  const [resultStocks, setResultStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStockId, setSelectedStockId] = useState(null);
  const [details, setDetails] = useState([]);
  const STOCK_PER_PAGE = 10;

  useEffect(() => {
    stocksApi
      .filterStocks(filters)
      .then((res) => {
        const { data } = res;
        setLoading(false);
        console.log(data);
        setResultStocks(data);
        setLoading(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [filters]);

  const indexOfLastPost = currentPage * STOCK_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - STOCK_PER_PAGE;
  const currentStocks = resultStocks?.slice(indexOfFirstPost, indexOfLastPost);

  const onRemove = useCallback(
    (code) => {
      const filteredStocks = resultStocks.filter(
        (stock) => stock.code !== code
      );
      console.log(details);
      if (details.length && details[0].code === code) {
        setSelectedStockId(null);
        setDetails([]);
      }
      setResultStocks(filteredStocks);
    },
    [resultStocks, details]
  );

  const paginate = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const showDetails = useCallback(
    async (code) => {
      if (details.length && details[0].code === code) {
        setDetails([]);
        return;
      }
      await stocksApi
        .getStock(code)
        .then(({ data }) => {
          setDetails(data);
        })
        .catch((err) => console.error(err));
    },
    [details]
  );

  return (
    <GlobalLayout>
      <Layout>
        {!loading ? (
          <LoadingBlock>Searching...</LoadingBlock>
        ) : (
          <CardsBlock>
            {currentStocks.map((stock, index) => {
              const { code, name } = stock;
              return (
                <Card
                  index={code}
                  id={code}
                  selected={selectedStockId === code}
                  companyName={name}
                  onShowDetails={() => showDetails(code)}
                  onRemove={() => onRemove(code)}
                  onSelect={setSelectedStockId}
                />
              );
            })}
          </CardsBlock>
        )}
        <Pagination
          page={currentPage}
          stockPerPage={STOCK_PER_PAGE}
          totalStocks={resultStocks.length}
          paginate={paginate}
        />
        <>{details.length ? <FinancialStatements data={details} /> : null}</>
      </Layout>
      )
    </GlobalLayout>
  );
};

export default ShowResult;
