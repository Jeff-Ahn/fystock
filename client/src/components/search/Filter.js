import React from 'react';
import styled from '@emotion/styled';

const FilterBlock = styled.div`
  display: flex;
  padding-top: 1rem;
`;

const GLBtnBlock = styled.div``;

const GreaterBtn = styled.button``;

const LessBtn = styled.button``;

const Filter = ({ conditionName }) => {
  return (
    <FilterBlock>
      <span>{conditionName}</span>
      <input />
      <GLBtnBlock>
        <GreaterBtn>이상</GreaterBtn>
        <LessBtn>이하</LessBtn>
      </GLBtnBlock>
    </FilterBlock>
  );
};

export default Filter;
