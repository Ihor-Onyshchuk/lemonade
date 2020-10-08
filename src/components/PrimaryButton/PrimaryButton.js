import React from 'react';
import './PrimaryButton.scss';

const PrimaryBtn = ({name, onClick, className}) => {
  return (
    <button
      className="start__btn"
      onClick={onClick}
      type="button"
    >
    {name}
  </button>
  )
};

export default PrimaryBtn;
