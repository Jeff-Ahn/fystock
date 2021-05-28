import styled from '@emotion/styled';
import { PRIMARY_COLOR } from '../../../domain/constants';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageLists = styled.ul`
  display: flex;
`;

export const PageNumber = styled.li`
  list-style: none;
`;

export const PageButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0 0.3rem;
  padding: 0;
  border: none;
  background: none;
  outline: none;
  color: #495057;

  &.active {
    color: ${PRIMARY_COLOR};
    font-weight: bold;
  }
`;
