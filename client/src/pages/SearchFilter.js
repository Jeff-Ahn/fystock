import React, { useState } from 'react';
import styled from '@emotion/styled';
import GlobalLayout from '../components/base/GlobalLayout';
import CheckBox from '../components/common/CheckBox';
import Button from '../components/common/Button';
import { CONDITIONS, MOBILE_MAX_WIDTH } from '../domain/constants';
import Filter from '../components/search/Filter';

import { useDispatch } from 'react-redux';
import { setUserFilters } from '../store/actions/filters';
import { useHistory } from 'react-router-dom';

const Layout = styled.main`
  display: inline-block;
  padding: 0 20%;
  max-width: ${MOBILE_MAX_WIDTH};
  margin: 2rem;
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
  const [filters, setFilters] = useState([]);
  const history = useHistory();

  const dispatch = useDispatch();
  console.log('conditions: ', conditions);
  console.log('filters: ', filters);

  const addFilter = (id) => {
    const { condition } = CONDITIONS.find((_condition) => _condition.id === id);
    const newFilter = {
      id,
      condition,
      value: 0,
      checkedState: 'up', // 'up': 이상, 'down': 이하
    };
    const newFilters = [...filters, newFilter];
    newFilters.sort((a, b) => a.id - b.id);
    setFilters(newFilters);
  };

  const removeFilter = (id) => {
    const newFilters = filters.filter((filter) => filter.id !== id);
    setFilters(newFilters);
  };

  const setFilter = (id, value, checkedState) => {
    console.log(filters);

    const filter = filters.find((filter) => filter.id === id);
    const newFilter = { ...filter, value, checkedState };
    const index = filters.indexOf(filter);
    const newFilters = [...filters];
    newFilters[index] = newFilter;
    setFilters(newFilters);
  };

  return (
    <GlobalLayout>
      <Layout>
        {conditions.map((condition, index) => (
          <CheckBox
            key={condition.id}
            title={condition.condition}
            checked={condition.isChecked}
            onChange={() => {
              const isExist = filters.find(
                (filter) => filter.id === condition.id
              )
                ? true
                : false;
              if (!isExist) {
                addFilter(condition.id);
              } else {
                removeFilter(condition.id);
              }

              const newCondition = {
                ...condition,
                isChecked: !condition.isChecked,
              };
              console.log(newCondition);
              const newConditions = [...conditions];
              newConditions[index] = newCondition;
              setConditions(newConditions);
            }}
          />
        ))}
      </Layout>
      <VerticalLayout>
        {filters.map((filter) => (
          <Filter
            key={filter.id}
            id={filter.id}
            condition={filter.condition}
            value={filter.value}
            checkedState={filter.checkedState}
            setFilter={setFilter}
          />
        ))}
        <Button
          onClick={() => {
            dispatch(setUserFilters(filters));
            history.push('/result');
          }}
        >
          필터링 결과 확인하기
        </Button>
      </VerticalLayout>
    </GlobalLayout>
  );
};

export default SearchFilter;
