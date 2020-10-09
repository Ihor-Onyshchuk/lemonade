import React from 'react';
import T from 'prop-types';

import Button from '../Button/Button';
import {numberWithDelimiter} from '../../utils';
import lucas from '../../assets/images/lucas.svg';

import './SalutePage.scss';

const SalutePage = ({mode, score, onStart}) => {
  const isEnd = mode === 'end';
  const buttonName = isEnd ? 'Try again' : 'Start';
  
  return (
    <div className="start">
      {!isEnd && <div className="bg"/>}
      <div className="content">
        <div className="logo">
          <img src={lucas} alt="lucas"/>
        </div>
        <div className="wrapper">
          {isEnd && <div className="suptitle">Total score:</div>}
          <h1 className="title">
            {isEnd ? <span>&#36;{numberWithDelimiter(score)} earned</span> : <span>Who wants to be a millionaire?</span>}
          </h1>
          <Button
            name={buttonName} 
            onClick={onStart}
            className="button"
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
