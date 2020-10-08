import React from 'react';
import './Button.scss';

const Button = ({name, onClick, className = 'start__btn'}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type="button"
    >
    {name}
  </button>
  )
};

export default Button;
