import React from 'react';
import {numberWithDelimiter} from '../../utils';

import lucas from '../../assets/images/lucas.svg';
import Button from '../Button/Button';
import './SalutePage.scss';

const SalutePage = ({mode, score, onStart}) => {
  const isEnd = mode === 'end';
  const buttonName = isEnd ? 'Try again' : 'Start';
  
  return (
    <div className="start">
      {!isEnd && <div className="start__bg"/>}
      <div className="start__content">
        <div className="start__logo">
          <img src={lucas} alt="lucas"/>
        </div>
        <div className="start__wrapper">
          {isEnd && <div className="start__suptitle">Total score:</div>}
          <h1 className="start__title">
            {isEnd ? <span>&#36;{numberWithDelimiter(score)} earned</span> : <span>Who wants to be a millionaire?</span>}
          </h1>
          <Button
            name={buttonName} 
            onClick={onStart}
            className="start__btn"
          />
        </div>
      </div>
    </div>
  )
}

export default SalutePage;