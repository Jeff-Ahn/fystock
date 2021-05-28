import React from 'react';
import Condition from '../Condition';
import * as S from './styles';

// 결과 페이지에 사용자가 사용한 필터링 셋팅사항을 보여주기 위한 컴포넌트
const FilterSetting = ({ filterList }) => {
  const settings = filterList;
  return (
    <S.FilterSettingBlock>
      <S.Text>* 사용자 필터링 셋팅</S.Text>
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
