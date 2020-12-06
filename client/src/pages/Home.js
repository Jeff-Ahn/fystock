import React from 'react';
import GlobalLayout from '../components/base/GlobalLayout';
import styled from '@emotion/styled';
import { MOBILE_MAX_WIDTH, PRIMARY_COLOR } from '../domain/constants';
import Button from '../components/common/Button';

const HomeBlock = styled.div`
  width: 100%;
  height: 45rem;
`;

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 30%;
  max-width: ${MOBILE_MAX_WIDTH};
`;

const Description = styled.h2`
  margin: 0;
  font-size: 2.2rem;
  text-align: center;

  @media (max-width: ${MOBILE_MAX_WIDTH}px) {
    font-size: 1.5rem;
  }
`;

const Home = () => {
  return (
    <GlobalLayout>
      <HomeBlock>
        <Layout>
          <Description>Find Your Stock!</Description>
          <Description>
            FYStock은 재무재표 필터링을 기반으로 원하는 종목을 찾아주는
            서비스입니다.
          </Description>
          <Button to='/search' color={PRIMARY_COLOR}>
            Get Started for Free
          </Button>
        </Layout>
      </HomeBlock>
    </GlobalLayout>
  );
};

export default Home;
