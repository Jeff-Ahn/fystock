import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-family: 'Rubik', sans-serif;
  color: #91a7ff;
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
