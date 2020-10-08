import React from 'react';
import GlobalLayout from '../components/base/GlobalLayout';
import styled from '@emotion/styled';

const HomeBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const Home = () => {
  return (
    <GlobalLayout>
      <HomeBlock>HOME</HomeBlock>
    </GlobalLayout>
  );
};

export default Home;
