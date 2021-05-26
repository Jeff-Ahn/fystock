import React from 'react';
import * as S from './styles';

const Card = ({
  id,
  companyName,
  onRemove,
  onShowDetails,
  selected,
  onSelect,
}) => {
  return (
    <S.CardBlock>
      {!selected ? (
        <S.ContentBlock
          onClick={() => {
            onShowDetails(id);
            onSelect(id);
          }}
        >
          <S.Content>
            <span>{id}</span>
            <header>{companyName}</header>
          </S.Content>
        </S.ContentBlock>
      ) : (
        <S.ContentBlock
          className='active'
          onClick={() => {
            onShowDetails(id);
            onSelect(null);
          }}
        >
          <S.Content>
            <span>{id}</span>
            <header>{companyName}</header>
          </S.Content>
        </S.ContentBlock>
      )}

      <S.DeleteBtn onClick={() => onRemove(id)}>x</S.DeleteBtn>
    </S.CardBlock>
  );
};

export default Card;
