import styled from '@emotion/styled';
import { MOBILE_MAX_WIDTH } from '../../domain/constants';

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 30%;
  max-width: ${MOBILE_MAX_WIDTH};
  margin: 2rem;
`;

export const CardsBlock = styled.div`
  margin: 0 auto;
  height: 28rem;
`;

export const LoadingBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13rem;
  font-size: 2rem;
`;

export const Description = styled.div`
  margin-left: 2.5rem;
  margin-bottom: 2.5rem;
  font-size: 1.25rem;
  font-weight: bold;
`;
