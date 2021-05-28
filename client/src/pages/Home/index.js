import React from 'react';
import GlobalLayout from '../../components/base/GlobalLayout';
import Button from '../../components/common/Button';
import { PRIMARY_COLOR } from '../../domain/constants';
import * as S from './styles';

const Home = () => {
  return (
    <GlobalLayout>
      <S.HomeBlock>
        <S.Layout>
          <S.Description>Find Your Stock!</S.Description>
          <S.Description>
            FYStock은 재무재표 필터링을 기반으로 원하는 종목을 찾아주는
            서비스입니다.
          </S.Description>
          <Button to='/search' color={PRIMARY_COLOR}>
            Get Started for Free
          </Button>
        </S.Layout>
      </S.HomeBlock>
    </GlobalLayout>
  );
};

export default Home;
