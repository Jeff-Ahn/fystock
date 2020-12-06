import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { PRIMARY_COLOR } from '../../domain/constants';

const ConditionBlock = styled.div`
  min-width: 10rem;
  font-size: 1rem;
  margin-right: 0.125rem;
  display: initial;
`;

const ConditionName = styled.span`
  color: ${PRIMARY_COLOR};
  font-weight: bold;
`;

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
    <ConditionBlock>
      <ConditionName>{condition}</ConditionName> {value}
      {unit} {updown} {'/'}
    </ConditionBlock>
  );
};

export default Condition;
