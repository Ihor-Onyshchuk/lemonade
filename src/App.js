import React, { useEffect, useState } from 'react';
import {keys} from 'lodash';
import cx from 'classnames';

import {getQuestion} from './services';
import {data} from './data';

const priseList = keys(data);

const defaultAnswerState = {
  answer: '',
  wrong: false,
  correct: false,
  selected: false,
};

const drumroll = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 2000);
})

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState('start');
  const [answerState, setAnswerState] = useState(defaultAnswerState);

  useEffect(() => {
    const question = getQuestion(data, priseList[step])
    setCurrentQuestion(question);
  }, [step]);

  const handleStart = () => {
    setMode('game');
    setStep(0)
  }

  const handleAnswerSubmit = (answer) => {
    setAnswerState({ ...answerState, answer, selected: true});
    const isCorrect = answer.includes(currentQuestion.correct);

    drumroll().then(() => {
      if (isCorrect) {
        setAnswerState((prevState) => ({...prevState, selected: false, correct: true}));
        drumroll().then(() => {
          setAnswerState(defaultAnswerState);
          setStep(step + 1);
        })
      } else {
        setAnswerState((prevState) => ({...prevState, selected: false, wrong: true}));
        drumroll().then(() => {
          setAnswerState(defaultAnswerState);
          setMode('end');
        })
      }
    })
  }

  return (
    <div>
      {mode === 'start' && (
        <div>
          Start
          <button onClick={handleStart}>start</button>
        </div>
      )}
       {mode === 'game' && (
        <div>
          <div>
            <h2>{currentQuestion.question}</h2>
            <div>
              {currentQuestion.answers.map((answer, i) => (
                <button
                  className={cx(answerState.answer === answer && {
                    selected: answerState.selected,
                    correct: answerState.correct,
                    wrong: answerState.wrong,
                })}
                  key={i} onClick={() => handleAnswerSubmit(answer)}
                >
                  {answer}
                </button >
              ))}
            </div>
          </div>
          <div>
            {!!priseList.length && priseList.map((prise, i) => (
              <div className={cx({earned: i < step, active: i === step})} key={prise}>{prise}</div>
            ))}
          </div>
        </div>
      )}
      {mode === 'end' && (
        <div>
          <div>
            Total score: 
            <b>$ {!step ? 0 : priseList[step - 1]} earned</b>
            <button onClick={handleStart}>Play again</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
