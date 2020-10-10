import React, { useState } from 'react'
import T from 'prop-types';

import Modal from '../common/Modal';
import Burger from '../common/Burger';
import PriseList from './PriseList';
import AnswerList from './AnswerList';

import './GamePage.scss';

const GamePage = ({
  currentQuestion, answerState, priseList, step, onSubmit
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const renderedPriseList = <PriseList priseList={priseList} step={step} />;

  return (
    <>
      <div className="game">
        <Burger open={isModalOpen} onClick={setIsModalOpen} />

        <div className="game-content">
          <div className="game-question">
            <h1>{currentQuestion.question}</h1>
          </div>

          <AnswerList
            onSubmit={onSubmit}
            answerState={answerState}
            answers={currentQuestion.answers}
          />
        </div>

        <div className="game-prises">
          {renderedPriseList}
        </div>
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClick={setIsModalOpen}
          content={renderedPriseList}
        />
      )}
    </>
  );
};

GamePage.propTypes = {
  currentQuestion: T.object.isRequired,
  answerState: T.object.isRequired,
  priseList: T.array.isRequired,
  step: T.number.isRequired,
  onSubmit: T.func.isRequired,
}

export default GamePage;
