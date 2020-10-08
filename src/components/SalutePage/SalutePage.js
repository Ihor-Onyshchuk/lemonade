import React from 'react';
import PrimaryBtn from '../PrimaryButton/PrimaryButton';
import {numberWithDelimiter} from '../../utils';

import lucas from '../../assets/images/lucas.svg';
import './SalutePage.scss';

const SalutePage = ({mode, score, onStart}) => {
  const isEnd = mode === 'end';
  const buttonName = isEnd ? 'Try again' : 'Start';

  return (
    <div className="start">
      {!isEnd && <div className="start__bg"/>}
      <div className="start__content">
        <div className="start__logo">
          <img src={lucas} alt="Lucas"/>
        </div>
        <div className="start__wrapper">
          {isEnd && <div>Total score: {numberWithDelimiter(score)}</div>}
          {!isEnd && <h1 className="start__title">Who wants to be a millionaire?</h1>}
          <PrimaryBtn
            name={buttonName} 
            onClick={onStart}
          />
        </div>
      </div>
    </div>
  )
}

export default SalutePage;