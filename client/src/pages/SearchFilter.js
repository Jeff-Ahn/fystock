import React, { useState } from 'react';
import styled from '@emotion/styled';
import GlobalLayout from '../components/base/GlobalLayout';
import CheckBox from '../components/common/CheckBox';
import Button from '../components/common/Button';
import Filter from '../components/Filter/Filter';
import useFilters from '../hooks/useFilters';
import { CONDITIONS, MOBILE_MAX_WIDTH } from '../domain/constants';

const SearchFilterBlock = styled.div`
  width: 100%;
  height: 45rem;
`;

const Layout = styled.main`
  display: inline-block;
  padding: 0 30%;
  max-width: ${MOBILE_MAX_WIDTH};
  margin: 2rem;
  text-align: center;
`;

const VerticalLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
  max-width: ${MOBILE_MAX_WIDTH};
`;

const SearchFilter = () => {
  const [conditions, setConditions] = useState(CONDITIONS);
  const [filterList, setFilterList] = useFilters();

  const addFilter = (id) => {
    const target = conditions.find((_condition) => _condition.id === id);
    if (target === undefined) return;
    const { condition } = conditions.find((_condition) => _condition.id === id);
    const newFilter = {
      id,
      condition,
      value: 0,
      checkedState: 'up', // 'up': 이상, 'down': 이하
    };
    const newFilterList = [...filterList, newFilter];
    newFilterList.sort((a, b) => a.id - b.id);
    setFilterList(newFilterList);
  };

  const removeFilter = (id) => {
    const newFilterList = filterList.filter((filter) => filter.id !== id);
    setFilterList(newFilterList);
  };

  const setFilter = (id, value, checkedState) => {
    const filter = filterList.find((filter) => filter.id === id);
    const newFilter = { ...filter, value, checkedState };
    const index = filterList.indexOf(filter);
    const newFilterList = [...filterList];
    newFilterList[index] = newFilter;
    setFilterList(newFilterList);
  };

  const checkHandler = (e) => {
    const id = Number(e.target.dataset.id);
    const isExist = filterList.find((filter) => filter.id === id);
    if (!isExist) {
      addFilter(id);
    } else {
      removeFilter(id);
    }

    const newConditions = [...conditions];
    newConditions[id - 1] = {
      ...newConditions[id - 1],
      isChecked: !conditions[id - 1].isChecked,
    };
    setConditions(newConditions);
  };

  return (
    <GlobalLayout>
      <SearchFilterBlock>
        <Layout>
          {conditions.map((condition) => (
            <CheckBox
              id={condition.id}
              key={condition.id}
              title={condition.condition}
              checked={condition.isChecked}
              onClick={checkHandler}
            />
          ))}
        </Layout>
        <VerticalLayout>
          {filterList.map((filter) => (
            <Filter
              key={filter.id}
              id={filter.id}
              condition={filter.condition}
              value={filter.value}
              checkedState={filter.checkedState}
              setFilter={setFilter}
            />
          ))}
          <Button to='/result'>필터링 결과 확인하기</Button>
        </VerticalLayout>
      </SearchFilterBlock>
    </GlobalLayout>
  );
};

export default SearchFilter;
