import React from 'react';
import T from 'prop-types';
import cx from 'classnames';

import './Burger.scss';

const Burger = ({open, onClick}) => {
  return (
    <div className={cx("toggle", {'toggle-open': open})} onClick={() => onClick(!open)}>
      <div className="toggle-bar1"/>
      <div className="toggle-bar2"/>
      <div className="toggle-bar3"/>
    </div>
  );
};

Burger.propTypes = {
  open: T.bool.isRequired,
  onClick: T.func.isRequired,
};

export default Burger;
