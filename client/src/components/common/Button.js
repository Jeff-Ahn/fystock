import React from 'react';
import styled from '@emotion/styled';
import { Route } from 'react-router-dom';
import { PRIMARY_COLOR } from '../../domain/constants';

const ButtonBlock = styled.button`
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
`;

const Button = ({ to, children, color = PRIMARY_COLOR, ...rest }) => {
  if (to) {
    return (
      <Route
        render={({ history }) => (
          <ButtonBlock
            color={color}
            onClick={(e) => {
              e.preventDefault();
              history.push(to);
            }}
            {...rest}
          >
            {children}
          </ButtonBlock>
        )}
      />
    );
  }
  return (
    <ButtonBlock color={color} {...rest}>
      {children}
    </ButtonBlock>
  );
};
export default Button;
