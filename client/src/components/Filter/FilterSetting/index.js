import React from 'react';
import Condition from '../Condition';
import * as S from './styles';

const FilterSetting = ({ filterList }) => {
  const settings = filterList;
  return (
    <S.FilterSettingBlock>
      <S.Text>{'* 사용자 필터링 셋팅'}</S.Text>
      <S.ConditionsBlock>
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
      </S.ConditionsBlock>
    </S.FilterSettingBlock>
  );
};

export default FilterSetting;
