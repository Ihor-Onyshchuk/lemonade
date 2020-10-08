import React, { useState } from 'react'
import cx from 'classnames'
import './Game.scss';

const Game = ({currentQuestion, answerState, onSubmit}) => {
  const [isModal, setIsModal] = useState(false);

  const handleModalClick = () => {
    setIsModal(!isModal)
  };

  return (
    <div className="game">
      <div className="game__wrapper">
        <div className={cx("game__toggle", {game__toggle_open: isModal})} onClick={handleModalClick}>
          <div class="game__toggle__bar1"></div>
          <div class="game__toggle__bar2"></div>
          <div class="game__toggle__bar3"></div>
        </div>
        <h1 className="game__question">{currentQuestion.question}</h1>
        <div className="game__buttons">
          {currentQuestion.answers.map((answer, i) => (
            <button
              key={i} 
              className={cx('game__button', answerState.answer === answer && {
                selected: answerState.selected,
                correct: answerState.correct,
                wrong: answerState.wrong,
              })}
              onClick={() => onSubmit(answer)}
            >
              {answer}
            </button >
          ))}
        </div>
      </div>
    </div>
  )
}

export default Game;
