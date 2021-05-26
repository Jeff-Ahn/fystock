import React, { useState, useEffect, useCallback } from 'react';
import Card from '../../components/common/Card';
import Pagination from '../../components/common/Pagination';
import FinancialStatements from '../../components/FinancialStatements';
import FilterSetting from '../../components/Filter/FilterSetting';
import GlobalLayout from '../../components/base/GlobalLayout';

import useFilters from '../../hooks/useFilters';
import stocksApi from '../../api/stock';
import * as S from './styles';

const ShowResult = () => {
  const [filterList] = useFilters();
  const [resultStocks, setResultStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStockId, setSelectedStockId] = useState(null);
  const [details, setDetails] = useState([]);
  const STOCK_PER_PAGE = 10;

  useEffect(() => {
    const getFiteredStockList = async () => {
      try {
        const res = await stocksApi.filterStocks(filterList);
        if (res.status !== 200) {
          throw new Error(res.status);
        }
        const { data } = res;
        setLoading(false);
        setResultStocks(data);
        setLoading(true);
      } catch (e) {
        throw new Error(e.message);
      }
    };
    getFiteredStockList();
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
      try {
        const res = await stocksApi.getStock(code);
        if (res.status !== 200) {
          throw new Error(res.status);
        }
        const { data } = res;

        setDetails(data);
      } catch (e) {
        throw new Error(e.message);
      }
    },
    [details]
  );

  return (
    <GlobalLayout>
      <S.Layout>
        <FilterSetting filterList={filterList} />
        {!loading ? (
          <S.LoadingBlock>Searching...</S.LoadingBlock>
        ) : (
          <>
            <S.Description>
              * 종목을 클릭하여 상세 재무제표를 확인하세요.
            </S.Description>
            <S.CardsBlock>
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
            </S.CardsBlock>
          </>
        )}
        <Pagination
          page={currentPage}
          stockPerPage={STOCK_PER_PAGE}
          totalStocks={resultStocks.length}
          paginate={paginate}
        />
        <>{details.length ? <FinancialStatements data={details} /> : null}</>
      </S.Layout>
      )
    </GlobalLayout>
  );
};

export default ShowResult;
