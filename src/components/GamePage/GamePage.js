import React, { useState } from 'react'
import cx from 'classnames'
import T from 'prop-types';

import GameButton from '../GameButton/GameButton';
import Modal from '../Modal/Modal';
import PriseList from '../PriseList/PriseList';

import './GamePage.scss';

const variantMarkers = ['A', 'B', 'C', 'D'];

const GamePage = ({currentQuestion, answerState, priseList, step, onSubmit}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="game">
        <div className="wrapper">
          <div className={cx("toggle", {'toggle-open': isModalOpen})} onClick={() => setIsModalOpen(!isModalOpen)}>
            <div className="toggle-bar1"/>
            <div className="toggle-bar2"/>
            <div className="toggle-bar3"/>
          </div>
          <h1 className="question">{currentQuestion.question}</h1>
          <div className="game-buttons">
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

GamePage.propTypes = {
  currentQuestion: T.object.isRequired,
  answerState: T.object.isRequired,
  priseList: T.array.isRequired,
  step: T.number.isRequired,
  onSubmit: T.func.isRequired
}

export default GamePage;
