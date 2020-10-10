import React, { useEffect, useState } from 'react';
import {keys} from 'lodash';

import SalutePage from './components/SalutePage/SalutePage';
import GamePage from './components/GamePage/GamePage';

import {getQuestion} from './services';
import {drumroll} from './utils'
import {data} from './data';

const priseList = keys(data);
const saluteModes = ['start', 'end'];

const defaultAnswerState = {
  answer: '',
  wrong: false,
  correct: false,
  selected: false,
};

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answerState, setAnswerState] = useState(defaultAnswerState);
  const [mode, setMode] = useState('start');
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < priseList.length) {
      const question = getQuestion(data, priseList[step]);
      setCurrentQuestion(question);
    }
  }, [step]);

  const handleStart = () => {
    setMode('game');
    setStep(0);
  };

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
    });
  };

  const totalScore = !step ? '0' : priseList[step - 1];

  return (
    <>
      {saluteModes.includes(mode) && (
        <SalutePage
          mode={mode}
          score={totalScore}
          onStart={handleStart}
        />
      )}
      {mode === 'game' && (
        <GamePage
          step={step}
          priseList={priseList}
          answerState={answerState}
          currentQuestion={currentQuestion}
          onSubmit={handleAnswerSubmit}
        />
      )}
    </>
  );
};

export default App;
