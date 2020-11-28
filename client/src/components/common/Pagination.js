import React from 'react';
import styled from '@emotion/styled';
import { PRIMARY_COLOR } from '../../domain/constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageLists = styled.ul`
  display: flex;
`;
const PageNumber = styled.li`
  list-style: none;
`;
const PageButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${PRIMARY_COLOR};
  margin: 0 0.3rem;
  padding: 0;
  border: none;
  background: none;
`;
const Pagination = ({ stockPerPage, totalStocks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStocks / stockPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Wrapper>
      <PageLists>
        {pageNumbers.map((number) => (
          <PageNumber key={number}>
            <PageButton onClick={() => paginate(number)}>{number}</PageButton>
          </PageNumber>
        ))}
      </PageLists>
    </Wrapper>
  );
};
export default Pagination;
