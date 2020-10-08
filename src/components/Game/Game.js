import React, { useState } from 'react'
import cx from 'classnames'
import GameButton from '../GameButton/GameButton';
import Modal from '../Modal/Modal';
import PriseList from '../PriseList/PriseList';
import './Game.scss';

const variantMarkers = ['A', 'B', 'C', 'D'];

const Game = ({currentQuestion, answerState, priseList, step, onSubmit}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="game">
        <div className="game__wrapper">
          <div className={cx("game__toggle", {game__toggle_open: isModalOpen})} onClick={() => setIsModalOpen(!isModalOpen)}>
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
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} onClick={setIsModalOpen}>
          <PriseList priseList={priseList} step={step} />
        </Modal>
      )}
    </>
  )
}

export default Game;
