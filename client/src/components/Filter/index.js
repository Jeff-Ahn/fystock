import React, { useState, useEffect } from 'react';
import { PRIMARY_COLOR } from '../../domain/constants';
import * as S from './styles';
import { addUnit } from '../../lib/utils';

const Filter = ({ condition, value, checkedState, id, setFilter }) => {
  const [unit, setUnit] = useState('');

  useEffect(() => {
    addUnit(condition, setUnit);
  }, [condition]);

  const onFocus = (e) => {
    e.target.select();
  };

  return (
    <S.FilterBlock>
      <S.ConditionBlock>
        {condition}
        {unit}
      </S.ConditionBlock>
      <S.NumberInput
        type='number'
        step={5}
        value={value}
        onFocus={(e) => onFocus(e)}
        onChange={(e) => {
          const userInputValue =
            e.target.value.length > 5
              ? e.target.value.slice(0, 5) * 1
              : e.target.value * 1;

          setFilter(id, userInputValue, checkedState);
        }}
      />
      <S.GLBtnBlock
        onClick={() => {
          checkedState = checkedState === 'up' ? 'down' : 'up';
          setFilter(id, value, checkedState);
        }}
      >
        {checkedState === 'up' ? (
          <>
            <S.GreaterBtn color={PRIMARY_COLOR}>이상</S.GreaterBtn>
            <S.LessBtn>이하</S.LessBtn>
          </>
        ) : (
          <>
            <S.GreaterBtn>이상</S.GreaterBtn>
            <S.LessBtn color={PRIMARY_COLOR}>이하</S.LessBtn>
          </>
        )}
      </S.GLBtnBlock>
    </S.FilterBlock>
  );
};

export default Filter;
