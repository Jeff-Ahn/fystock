import React from 'react';
import * as S from './styles';

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
      <S.TitleBlock>{title}</S.TitleBlock>
    </label>
  );
};

export default CheckBox;
