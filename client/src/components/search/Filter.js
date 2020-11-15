import React from 'react';
import styled from '@emotion/styled';
import { PRIMARY_COLOR } from '../../domain/constants';

const FilterBlock = styled.div`
  display: flex;
  padding-top: 1rem;
`;

const GLBtnBlock = styled.div``;

const GreaterBtn = styled.button`
  background: ${(props) => props.color};
`;

const LessBtn = styled.button`
  background: ${(props) => props.color};
`;

const Filter = ({ condition, value, checkedState, id, setFilter }) => {
  return (
    <FilterBlock>
      <span>{condition}</span>
      <input
        type='number'
        value={value}
        onChange={(e) => {
          setFilter(id, e.target.value * 1, checkedState);
        }}
      />
      <GLBtnBlock
        onClick={() => {
          checkedState = checkedState === 'up' ? 'down' : 'up';
          setFilter(id, value, checkedState);
        }}
      >
        {checkedState === 'up' ? (
          <>
            <GreaterBtn color={PRIMARY_COLOR}>이상</GreaterBtn>
            <LessBtn>이하</LessBtn>
          </>
        ) : (
          <>
            <GreaterBtn>이상</GreaterBtn>
            <LessBtn color={PRIMARY_COLOR}>이하</LessBtn>
          </>
        )}
      </GLBtnBlock>
    </FilterBlock>
  );
};

export default Filter;
