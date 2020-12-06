import React from 'react';
import styled from '@emotion/styled';
import { FYSTOCK_GRAY, PRIMARY_COLOR } from '../../domain/constants';

const CardBlock = styled.div`
  display: flex;
  width: 20rem;
  align-items: center;
`;

const ContentBlock = styled.div`
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
  &.active {
    border-color: ${PRIMARY_COLOR};
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1rem;
  justify-content: space-between;
`;

const DeleteBtn = styled.button`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${PRIMARY_COLOR};
  color: #fff;
  outline: none;
  border: none;
  &:hover {
    background: tomato;
  }
`;

const Card = ({
  id,
  index,
  companyName,
  onRemove,
  onShowDetails,
  selected,
  onSelect,
}) => {
  return (
    <CardBlock>
      {!selected ? (
        <ContentBlock
          onClick={() => {
            onShowDetails(id);
            onSelect(id);
          }}
        >
          <Content>
            <span>{index}</span>
            <header>{companyName}</header>
          </Content>
        </ContentBlock>
      ) : (
        <ContentBlock
          className='active'
          onClick={() => {
            onShowDetails(id);
            onSelect(null);
          }}
        >
          <Content>
            <span>{index}</span>
            <header>{companyName}</header>
          </Content>
        </ContentBlock>
      )}

      <DeleteBtn onClick={() => onRemove(id)}>x</DeleteBtn>
    </CardBlock>
  );
};

export default Card;
