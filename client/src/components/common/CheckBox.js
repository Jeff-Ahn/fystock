import React from 'react';

const CheckBox = ({ onClick, onChange, title = '', checked = false }) => {
  return (
    <label>
      <input
        onClick={onClick}
        onChange={onChange}
        type='checkbox'
        checked={checked}
      />
      {title}
    </label>
  );
};

export default CheckBox;
