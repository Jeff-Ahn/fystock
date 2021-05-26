import React, { useState, useEffect } from 'react';
import { PRIMARY_COLOR } from '../../domain/constants';
import * as S from './styles';

const Filter = ({ condition, value, checkedState, id, setFilter }) => {
  const [unit, setUnit] = useState('');

  useEffect(() => {
    const calcUnit = (condition) => {
      const length = condition.length;
      switch (condition[length - 1]) {
        case '액':
        case '익':
          setUnit('(억원)');
          break;
        case '율':
        case '률':
        case 'E':
        case '향':
          setUnit('(%)');
          break;
        case 'R':
          setUnit('(배)');
          break;
        case 'S':
        case '금':
          setUnit('(원)');
          break;
        default:
          break;
      }
    };
    calcUnit(condition);
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
