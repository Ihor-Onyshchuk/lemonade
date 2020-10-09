import React from 'react';
import T from 'prop-types';

import './Button.scss';

const Button = ({name, onClick, className = 'button'}) => {
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

Button.propTypes = {
  name: T.string.isRequired,
  onClick: T.func.isRequired,
  className: T.string,
}

export default Button;
