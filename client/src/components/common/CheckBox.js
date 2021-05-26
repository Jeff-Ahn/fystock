import React from 'react';
import styled from '@emotion/styled';

const TitleBlock = styled.span`
  font-size: 1.125rem;
`;
const CheckBox = ({ id, onClick, onChange, title = '', checked = false }) => {
  return (
    <label>
      <input
        data-id={id}
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
