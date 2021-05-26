import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const FilterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  font-size: 1.125rem;
`;

export const ConditionBlock = styled.span`
  width: 100px;
`;

export const NumberInput = styled.input`
  transition: all 0.125s ease-in;
  font-size: 0.875rem;
  flex: 1;
  height: 1.325rem;
  margin-right: 0.5rem;
`;

export const GLBtnBlock = styled.div``;

export const GreaterBtn = styled.button`
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

export const LessBtn = styled.button`
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
