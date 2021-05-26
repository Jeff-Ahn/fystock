import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import Card from '../components/common/Card';
import GlobalLayout from '../components/base/GlobalLayout';
import Pagination from '../components/common/Pagination';
import FinancialStatements from '../components/FinancialStatements/FinancialStatements';
import { MOBILE_MAX_WIDTH } from '../domain/constants';
import FilterSetting from '../components/Filter/FilterSetting';
import useFilters from '../hooks/useFilters';
import stocksApi from '../api/stock';

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 30%;
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

const Description = styled.div`
  margin-left: 2.5rem;
  margin-bottom: 2.5rem;
  font-size: 1.25rem;
  font-weight: bold;
`;

const ShowResult = () => {
  const [filterList] = useFilters();
  const [resultStocks, setResultStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStockId, setSelectedStockId] = useState(null);
  const [details, setDetails] = useState([]);
  const STOCK_PER_PAGE = 10;

  useEffect(() => {
    stocksApi
      .filterStocks(filterList)
      .then((res) => {
        const { data } = res;
        setLoading(false);
        setResultStocks(data);
        setLoading(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [filterList]);

  const indexOfLastPost = currentPage * STOCK_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - STOCK_PER_PAGE;
  const currentStocks = resultStocks?.slice(indexOfFirstPost, indexOfLastPost);

  const onRemove = useCallback(
    (code) => {
      const filteredStocks = resultStocks.filter(
        (stock) => stock.code !== code
      );
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
        <FilterSetting filterList={filterList} />
        {!loading ? (
          <LoadingBlock>Searching...</LoadingBlock>
        ) : (
          <>
            <Description>
              * 종목을 클릭하여 상세 재무제표를 확인하세요.
            </Description>
            <CardsBlock>
              {currentStocks.map((stock) => {
                const { code, name } = stock;
                return (
                  <Card
                    key={code}
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
          </>
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
