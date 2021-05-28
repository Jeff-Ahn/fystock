import React, { useState, useEffect } from 'react';
import { addUnit } from '../../../lib/utils';
import * as S from './styles';

// 사용자가 선택한 재무제표의 조건을 표시하기 위한 컴포넌트
const Condition = ({ condition, value, checkedState }) => {
  const [unit, setUnit] = useState('');

  useEffect(() => {
    addUnit(condition, setUnit);
  }, [condition]);

  const updown = checkedState === 'up' ? '이상' : '이하';
  return (
    <S.ConditionBlock>
      <S.ConditionName>{condition}</S.ConditionName> {value}
      {unit} {updown} {'/'}
    </S.ConditionBlock>
  );
};

export default Condition;
