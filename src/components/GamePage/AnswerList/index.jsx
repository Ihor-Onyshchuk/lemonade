import React from 'react';
import cx from 'classnames';
import T from 'prop-types';

import './AnswerList.scss';

const variantMarkers = ['A', 'B', 'C', 'D'];

const svgCellDecoration = (
  <svg width="373" height="72" viewBox="0 0 373 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.7172 5.28344C24.8781 2.28016 28.3521 0.5 32.052 0.5H340.948C344.648 0.5 348.122 2.28016 350.283 5.28344L372.384 36L350.283 66.7166C348.122 69.7198 344.648 71.5 340.948 71.5H32.052C28.3521 71.5 24.8781 69.7198 22.7172 66.7166L0.615976 36L22.7172 5.28344Z" fill="white" stroke="#D0D0D8" />
  </svg>
);

const AnswerList = ({ answers = [], onSubmit, answerState }) => {
  const { answer: currAnswer, ...restState } = answerState;

  return (
    <div className="game-answers">
      {answers.map((answer, i) => (
        <div
          key={variantMarkers[i]}
          className={cx('game-answer', currAnswer === answer && restState)}
          onClick={() => (!currAnswer ? onSubmit(answer) : null)}
        >
          {svgCellDecoration}
          <div className="game-answer-content">
            <span className="variant">{variantMarkers[i]}</span>
            <span className="text">{answer}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

AnswerList.propTypes = {
  answers: T.array.isRequired,
  onSubmit: T.func.isRequired,
  answerState: T.object.isRequired,
};

export default AnswerList;
