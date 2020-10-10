import React from 'react';
import T from 'prop-types';
import cx from 'classnames';

import './Button.scss';

const Button = ({name, onClick, className}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx('btn', className)}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: T.string.isRequired,
  onClick: T.func.isRequired,
  className: T.string,
};

Button.defaultProps = {
  className: 'primary-btn',
};

export default Button;
