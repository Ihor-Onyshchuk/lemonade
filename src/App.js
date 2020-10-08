import React, { useEffect, useState } from 'react';
import {keys} from 'lodash';
import cx from 'classnames';

import Start from './components/Start/Start';

import {getQuestion} from './services';
import {data} from './data';
import Game from './components/Game/Game';

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
    <>
      {mode === 'start' && (
        <Start onClick={handleStart}/>
      )}
      {mode === 'game' && (
        <>
          <Game
            currentQuestion={currentQuestion}
            answerState={answerState}
            onSubmit={handleAnswerSubmit}
          />
          {/* <div>
            {!!priseList.length && priseList.map((prise, i) => (
              <div className={cx({earned: i < step, active: i === step})} key={prise}>{prise}</div>
            ))}
          </div> */}
        </>
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
    </>
  );
}

export default App;
