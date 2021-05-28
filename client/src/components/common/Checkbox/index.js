import React from 'react';
import * as S from './styles';

// CheckBox 컴포넌트(주식 필터링 조건을 추가/삭제 하기 위한 컴포넌트)
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
