import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { PRIMARY_COLOR } from '../../domain/constants';
import { css } from '@emotion/core';

const FilterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  font-size: 1.125rem;
`;

const ConditionBlock = styled.span`
  width: 100px;
`;

const NumberInput = styled.input`
  transition: all 0.125s ease-in;
  font-size: 0.875rem;
  flex: 1;
  height: 1.325rem;
  margin-right: 0.5rem;
`;

const GLBtnBlock = styled.div``;

const GreaterBtn = styled.button`
  background: ${(props) => props.color};
  border-radius: 4px 0 0 4px;
  font-size: 1.125rem;
  padding: 0.2rem 0.5rem;
  outline: none;
  border: none;
  font-weight: bold;
  ${(props) =>
    props.color &&
    css`
      color: #fff;
    `}
`;

const LessBtn = styled.button`
  background: ${(props) => props.color};
  border-radius: 0 4px 4px 0;
  font-size: 1.125rem;
  padding: 0.2rem 0.5rem;
  border: none;
  outline: none;
  font-weight: bold;
  ${(props) =>
    props.color &&
    css`
      color: #fff;
    `}
`;

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
    <FilterBlock>
      <ConditionBlock>
        {condition}
        {unit}
      </ConditionBlock>
      <NumberInput
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
      <GLBtnBlock
        onClick={() => {
          checkedState = checkedState === 'up' ? 'down' : 'up';
          setFilter(id, value, checkedState);
        }}
      >
        {checkedState === 'up' ? (
          <>
            <GreaterBtn color={PRIMARY_COLOR}>이상</GreaterBtn>
            <LessBtn>이하</LessBtn>
          </>
        ) : (
          <>
            <GreaterBtn>이상</GreaterBtn>
            <LessBtn color={PRIMARY_COLOR}>이하</LessBtn>
          </>
        )}
      </GLBtnBlock>
    </FilterBlock>
  );
};

export default Filter;
