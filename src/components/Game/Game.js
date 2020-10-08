import React, { useState } from 'react'
import cx from 'classnames'
import './Game.scss';
import GameButton from '../GameButton/GameButton';

const variantMarkers = ['A', 'B', 'C', 'D'];

const Game = ({currentQuestion, answerState, onSubmit}) => {
  const [isModal, setIsModal] = useState(false);

  const handleModalClick = () => {
    setIsModal(!isModal)
  };

  return (
    <div className="game">
      <div className="game__wrapper">
        <div className={cx("game__toggle", {game__toggle_open: isModal})} onClick={handleModalClick}>
          <div className="game__toggle__bar1"></div>
          <div className="game__toggle__bar2"></div>
          <div className="game__toggle__bar3"></div>
        </div>
        <h1 className="game__question">{currentQuestion.question}</h1>
        <div className="game__buttons">
          {currentQuestion.answers.map((answer, i) => (
            <GameButton 
              key={i} 
              answer={answer} 
              answerState={answerState} 
              onSubmit={onSubmit}
              variantMarker={variantMarkers[i]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Game;
