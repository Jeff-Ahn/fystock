import styled from '@emotion/styled';
import { MOBILE_MAX_WIDTH } from '../../domain/constants';

export const SearchFilterBlock = styled.div`
  width: 100%;
  height: 45rem;
`;

export const Layout = styled.main`
  display: inline-block;
  padding: 0 30%;
  max-width: ${MOBILE_MAX_WIDTH};
  margin: 2rem;
  text-align: center;
`;

export const VerticalLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
  max-width: ${MOBILE_MAX_WIDTH};
`;
