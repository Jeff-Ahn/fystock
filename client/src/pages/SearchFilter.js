import React, { useState } from 'react';
import styled from '@emotion/styled';
import GlobalLayout from '../components/base/GlobalLayout';
import CheckBox from '../components/common/CheckBox';
import { MOBILE_MAX_WIDTH } from '../domain/constants';
import Filter from '../components/search/Filter';
import { useSelector, useDispatch } from 'react-redux';

const Layout = styled.main`
  display: flex;
  justify-content: center;
  padding: 0 20%;
  max-width: ${MOBILE_MAX_WIDTH};
  margin: 2rem;
`;

const VerticalLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20%;
  max-width: ${MOBILE_MAX_WIDTH};
`;

const SearchFilter = () => {
  return (
    <GlobalLayout>
      <Layout>
        <CheckBox title='매출액' />
        <CheckBox title='영업이익' />
        <CheckBox title='당기순이익' />
        <CheckBox title='영업이익률' />
        <CheckBox title='순이익률' />
      </Layout>
      <VerticalLayout>
        <Filter conditionName='매출액' />
        <Filter conditionName='영업이익' />
        <Filter conditionName='영업이익률' />
      </VerticalLayout>
    </GlobalLayout>
  );
};

export default SearchFilter;
