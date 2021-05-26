import React, { useState, useEffect } from 'react';
import * as S from './styles';

const Condition = ({ condition, value, checkedState }) => {
  const [unit, setUnit] = useState('');

  useEffect(() => {
    const calcUnit = (condition) => {
      const length = condition.length;
      switch (condition[length - 1]) {
        case '액':
        case '익':
          setUnit('억원');
          break;
        case '율':
        case '률':
        case 'E':
        case '향':
          setUnit('%');
          break;
        case 'R':
          setUnit('배');
          break;
        case 'S':
        case '금':
          setUnit('원');
          break;
        default:
          break;
      }
    };
    calcUnit(condition);
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
