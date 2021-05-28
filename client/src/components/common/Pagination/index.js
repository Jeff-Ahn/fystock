import React from 'react';
import * as S from './styles';

// 결과 주식들을 pagination하여 보여주기 위한 컴포넌트
const Pagination = ({ stockPerPage, totalStocks, paginate, page }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalStocks / stockPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <S.Wrapper>
      <S.PageLists>
        {pageNumbers.map((number) => {
          if (page === number) {
            return (
              <S.PageNumber key={number}>
                <S.PageButton
                  className='active'
                  onClick={() => paginate(number)}
                >
                  {number}
                </S.PageButton>
              </S.PageNumber>
            );
          }
          return (
            <S.PageNumber key={number}>
              <S.PageButton onClick={() => paginate(number)}>
                {number}
              </S.PageButton>
            </S.PageNumber>
          );
        })}
      </S.PageLists>
    </S.Wrapper>
  );
};

export default Pagination;
