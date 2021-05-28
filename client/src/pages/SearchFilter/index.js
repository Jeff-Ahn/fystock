import React, { useState } from 'react';
import GlobalLayout from '../../components/base/GlobalLayout';
import CheckBox from '../../components/common/Checkbox';
import Button from '../../components/common/Button';
import Filter from '../../components/Filter';
import useFilters from '../../hooks/useFilters';
import { CONDITIONS } from '../../domain/constants';
import * as S from './styles';

// 어떤 재무제표 항목을 필터링할지를 고르는 페이지
const SearchFilter = () => {
  const [conditions, setConditions] = useState(CONDITIONS);
  const [filterList, setFilterList] = useFilters();

  // 필터링 추가 함수(체크되지 않은 필터링 조건을 바탕으로 필터링에 추가)
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

  // 필터링 제거 함수(체크된 필터링 조건 클릭시 필터링 항목에서 제거)
  const removeFilter = (id) => {
    const newFilterList = filterList.filter((filter) => filter.id !== id);
    setFilterList(newFilterList);
  };

  // 필터링 조건을 셋팅하는 함수
  const setFilter = (id, value, checkedState) => {
    const filter = filterList.find((filter) => filter.id === id);
    const newFilter = { ...filter, value, checkedState };
    const index = filterList.indexOf(filter);
    const newFilterList = [...filterList];
    newFilterList[index] = newFilter;
    setFilterList(newFilterList);
  };

  // 체크박스를 클릭할 때마다 처리할 핸들러 함수(필터링추가/제거)
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
      <S.SearchFilterBlock>
        <S.Layout>
          {conditions.map((condition) => (
            <CheckBox
              id={condition.id}
              key={condition.id}
              title={condition.condition}
              checked={condition.isChecked}
              onChange={checkHandler}
            />
          ))}
        </S.Layout>
        <S.VerticalLayout>
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
        </S.VerticalLayout>
      </S.SearchFilterBlock>
    </GlobalLayout>
  );
};

export default SearchFilter;
