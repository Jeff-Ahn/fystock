import React from 'react';
import { Route } from 'react-router-dom';
import { PRIMARY_COLOR } from '../../../domain/constants';
import * as S from './styles';

const Button = ({ to, children, color = PRIMARY_COLOR, ...rest }) => {
  if (to) {
    return (
      <Route
        render={({ history }) => (
          <S.ButtonBlock
            color={color}
            onClick={(e) => {
              e.preventDefault();
              history.push(to);
            }}
            {...rest}
          >
            {children}
          </S.ButtonBlock>
        )}
      />
    );
  }
  return (
    <S.ButtonBlock color={color} {...rest}>
      {children}
    </S.ButtonBlock>
  );
};
export default Button;
