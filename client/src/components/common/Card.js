import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { PRIMARY_COLOR } from '../../domain/constants';
// import stocksApi from '../../api/stock';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
const CardBlock = styled.div`
  display: flex;
  justify-content: space-around;
  border: 5px solid ${PRIMARY_COLOR};
  width: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  transition: 0.25s box-shadow ease-in, 0.25s transform ease-in;
  margin: 0.5rem;
  transition: 0.125s all ease-in;
  &:hover {
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  width: 20rem;
  justify-content: space-around;
`;

const Card = ({ id, index, onRemove }) => {
  // const stock = stocksApi.getStock(id);

  return (
    <CardBlock>
      <StyledLink to={`/result/${id}`}>
        <Content>
          {/* <header>{stock.stockName}</header> */}
          <span>{index}.</span>
          <header>종목이름</header>
          <main>시총이나현재가격?</main>
        </Content>
      </StyledLink>
      <button onClick={() => onRemove(id)}>x</button>
    </CardBlock>
  );
};

export default Card;
