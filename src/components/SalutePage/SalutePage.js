import React from 'react';
import T from 'prop-types';
import cx from 'classnames';

import Button from '../Button/Button';
import {numberWithDelimiter} from '../../utils';
import lucas from '../../assets/images/lucas.svg';

import './SalutePage.scss';

const SalutePage = ({mode, score, onStart}) => {
  const isEnd = mode === 'end';
  const buttonName = isEnd ? 'Try again' : 'Start';
  
  return (
    <div className={cx('salute', {'salute-end': isEnd})}>
      {!isEnd && <div className="salute-triangle-bg"/>}
      <div className="salute-content">
        <div className="salute-content-image">
          <img className="thumb-up" src={lucas} alt="lucas"/>
        </div>
        <div className="salute-content-text">
          {isEnd && <div className="salute-content-suptitle">Total score:</div>}
          <h1 className="content-title">
            {isEnd ? <span>&#36;{numberWithDelimiter(score)} earned</span> : <span>Who wants to be a millionaire?</span>}
          </h1>
          <Button
            name={buttonName} 
            onClick={onStart}
          />
        </div>
      </div>
    </div>
  )
};

SalutePage.propTypes = {
  mode: T.string.isRequired,
  score: T.string.isRequired,
  onStart: T.func.isRequired,
}

export default SalutePage;
