import React from 'react';
import cx from 'classnames';

import './GameButton.scss';

const GameButton = ({answerState, answer, onSubmit, variantMarker}) => {
  return (
    <div
      className={cx('game__button', answerState.answer === answer && {
        selected: answerState.selected,
        correct: answerState.correct,
        wrong: answerState.wrong,
      })}
      onClick={() => onSubmit(answer)}
    >
      <span className="game__button__variant">{variantMarker}</span>
      <span className="game__button__text">{answer}</span>
    </div >
  )
}

export default GameButton;
