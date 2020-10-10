import React from 'react';

import cx from 'classnames';
import T from 'prop-types';

import './GameButton.scss';

const GameButton = ({answerState, answer, onSubmit, variantMarker}) => {
  return (
    <div
      className={cx('game-button', answerState.answer === answer && {
        selected: answerState.selected,
        correct: answerState.correct,
        wrong: answerState.wrong,
      })}
      onClick={() => onSubmit(answer)}
    >
      <span className="variant">{variantMarker}</span>
      <span className="text">{answer}</span>
    </div >
  )
}

GameButton.propTypes = {
  answerState: T.object.isRequired,
  answer: T.string.isRequired,
  onSubmit: T.func.isRequired,
  variantMarker: T.string,
}

export default GameButton;