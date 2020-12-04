import React, { useState, useEffect, useCallback } from 'react';
import Card from '../components/common/Card';
import GlobalLayout from '../components/base/GlobalLayout';
import { MOBILE_MAX_WIDTH } from '../domain/constants';
import styled from '@emotion/styled';
import Pagination from '../components/common/Pagination';
import stocksApi from '../api/stock';
import { useSelector } from 'react-redux';
import FinancialStatements from '../components/FinancialStatements/FinancialStatements';

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  max-width: ${MOBILE_MAX_WIDTH};
  margin: 2rem;
`;

const ShowResult = () => {
  const filters = useSelector((state) => state.filters);
  const [resultStocks, setResultStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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
      setResultStocks(filteredStocks);
    },
    [resultStocks]
  );

  const paginate = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const showDetails = async (code) => {
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
  };

  return (
    <GlobalLayout>
      <Layout>
        {!loading ? (
          <>Loading...</>
        ) : (
          currentStocks.map((stock, index) => {
            const { code, name } = stock;
            return (
              <Card
                index={index + 1}
                id={code}
                companyName={name}
                onShowDetails={() => showDetails(code)}
                onRemove={() => onRemove(code)}
              />
            );
          })
        )}
        <Pagination
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
