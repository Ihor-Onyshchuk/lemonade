import React, { useEffect, useState } from 'react';
import {keys} from 'lodash';

import SalutePage from './components/SalutePage/SalutePage';
import GamePage from './components/GamePage/GamePage';

import {getQuestion} from './services';
import {data} from './data';

const priseList = keys(data);
const saluteModes = ['start', 'end'];

const defaultAnswerState = {
  answer: '',
  wrong: false,
  correct: false,
  selected: false,
};

const drumroll = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 100);
})

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState('start');
  const [answerState, setAnswerState] = useState(defaultAnswerState);

  useEffect(() => {
    if (step < priseList.length) {
      const question = getQuestion(data, priseList[step])
      setCurrentQuestion(question);
    }
  }, [step]);

  const handleStart = () => {
    setMode('game');
    setStep(0)
  }

  const handleAnswerSubmit = (answer) => {
    setAnswerState({ ...answerState, answer, selected: true});
    const isCorrect = answer.includes(currentQuestion.correct);
    const isGameOver = step === priseList.length - 1;

    drumroll().then(() => {
      if (isCorrect) {
        setAnswerState((prevState) => ({...prevState, selected: false, correct: true}));
        drumroll().then(() => {
          setAnswerState(defaultAnswerState);
          setStep(step + 1)

          if (isGameOver) setMode('end');
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
      {saluteModes.includes(mode) && (
        <SalutePage
          mode={mode}
          score={!step ? 0 : priseList[step - 1]}
          onStart={handleStart}
        />
      )}
      {mode === 'game' && (
        <GamePage
          priseList={priseList}
          step={step}
          currentQuestion={currentQuestion}
          answerState={answerState}
          onSubmit={handleAnswerSubmit}
        />
      )}
    </>
  );
}

export default App;
