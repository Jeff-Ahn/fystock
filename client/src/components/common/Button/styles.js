import styled from '@emotion/styled';
import { MOBILE_MAX_WIDTH } from '../../../domain/constants';

export const ButtonBlock = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  color: white;
  background: ${(props) => props.color};
  border-radius: 4px;
  padding: 1rem;
  margin: 2rem 0;
  transition: 0.125s all ease-in;
  &:hover {
    box-shadow: 0px 2px 12px #00000030;
  }

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    font-size: 1.5rem;
  }
`;
