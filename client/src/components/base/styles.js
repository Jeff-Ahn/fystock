import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { PRIMARY_COLOR } from '../../domain/constants';

export const FooterBlock = styled.div`
  text-align: center;
  font-size: 0.75rem;
  padding: 2rem;
`;

export const HeaderBlock = styled.header`
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
