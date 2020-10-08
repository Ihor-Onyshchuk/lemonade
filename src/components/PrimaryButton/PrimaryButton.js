import React from 'react';
import './PrimaryButton.scss';

const PrimaryBtn = ({btnName, onClick}) => {
  return (
    <button
      className="start__btn"
      onClick={onClick}
    >
    {btnName}
  </button>
  )
};

export default PrimaryBtn;
