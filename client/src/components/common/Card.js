import React from 'react';
import styled from '@emotion/styled';
import { FYSTOCK_GRAY } from '../../domain/constants';

const CardBlock = styled.div`
  display: flex;
  justify-content: space-around;
  border: 5px solid ${FYSTOCK_GRAY};
  width: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  transition: 0.25s box-shadow ease-in, 0.25s transform ease-in;
  margin: 0.5rem;
  transition: 0.125s all ease-in;
  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  width: 20rem;
  justify-content: space-between;
`;

const Card = ({ id, index, companyName, onRemove, onShowDetails }) => {
  return (
    <CardBlock>
      <Content onClick={() => onShowDetails(id)}>
        <span>{index}</span>
        <header>{companyName}</header>
      </Content>
      <button onClick={() => onRemove(id)}>x</button>
    </CardBlock>
  );
};

export default Card;
