import styled from '@emotion/styled';
import { MOBILE_MAX_WIDTH } from '../../domain/constants';

export const HomeBlock = styled.div`
  width: 100%;
  height: 45rem;
`;

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 30%;
  max-width: ${MOBILE_MAX_WIDTH};
`;

export const Description = styled.h2`
  margin: 0;
  font-size: 2.2rem;
  text-align: center;

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    font-size: 1.5rem;
  }
`;
