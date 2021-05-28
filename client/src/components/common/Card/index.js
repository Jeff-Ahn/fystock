import React from 'react';
import * as S from './styles';

// Card 컴포넌트(결과 주식들을 카드에 담아 표시하기 위한 컴포넌트)
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
