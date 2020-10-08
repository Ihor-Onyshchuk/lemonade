import React from 'react';
import './PrimaryBtn.scss';

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
