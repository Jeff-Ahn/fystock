import React from 'react';
import * as S from './styles';

const CheckBox = ({ id, onChange, title = '', checked = false }) => {
  return (
    <label>
      <input
        data-id={id}
        onChange={onChange}
        type='checkbox'
        checked={checked}
      />
      <S.TitleBlock>{title}</S.TitleBlock>
    </label>
  );
};

export default CheckBox;
