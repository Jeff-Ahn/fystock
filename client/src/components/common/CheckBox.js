import styled from '@emotion/styled';
import React from 'react';

const TitleBlock = styled.span`
  font-size: 1.125rem;
`;
const CheckBox = ({ onClick, onChange, title = '', checked = false }) => {
  return (
    <label>
      <input
        onClick={onClick}
        onChange={onChange}
        type='checkbox'
        checked={checked}
      />
      <TitleBlock>{title}</TitleBlock>
    </label>
  );
};

export default CheckBox;
