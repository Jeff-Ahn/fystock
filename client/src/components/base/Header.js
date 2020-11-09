import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { PRIMARY_COLOR } from '../../domain/constants';

const HeaderBlock = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-family: 'Rubik', sans-serif;
  color: ${PRIMARY_COLOR};
  font-size: 3rem;
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Logo to='/'>FYStock</Logo>
    </HeaderBlock>
  );
};

export default Header;
