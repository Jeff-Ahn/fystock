import React from 'react';
import styled from '@emotion/styled';
import Condition from './Condition';

const FilterSettingBlock = styled.div`
  display: inline;
`;

const Text = styled.span`
  margin-top: 2.5rem;
  margin-left: 2.5rem;
  font-size: 1.25rem;
  font-weight: bold;
`;

const Conditions = styled.div`
  width: 100%;
  margin: 2rem;
`;

const FilterSetting = ({ filterList }) => {
  const settings = filterList;
  return (
    <FilterSettingBlock>
      <Text>{'* 사용자 필터링 셋팅'}</Text>
      <Conditions>
        {settings?.length
          ? settings.map((filter) => {
              const { condition, value, checkedState } = filter;
              return (
                <Condition
                  key={condition}
                  condition={condition}
                  value={value}
                  checkedState={checkedState}
                />
              );
            })
          : null}
      </Conditions>
    </FilterSettingBlock>
  );
};

export default FilterSetting;
