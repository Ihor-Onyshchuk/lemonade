import React, { useEffect, useState } from 'react';
import {map} from 'lodash';

import {getQuestion, getAllPrise} from './services';
import {data} from './data';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [priseStep, setPriseStep] = useState(0);
  const [prise, setPrise] = useState([]);
  const [mode, setMode] = useState('start');

  useEffect(() => {
    setCurrentQuestion(getQuestion(data, prise[priseStep]));
    setPrise(getAllPrise(data));
  }, []);

  const handleStartClick = () => {
    setMode('game');
  }

  const handleAnswer = (event) => {
    const answer = event.target.innerText;
    const correct = currentQuestion.correct;
    const nextStep = priseStep + 1;

    if (answer.includes(correct)) {
      setCurrentQuestion(getQuestion(data, prise[nextStep]));
      setPriseStep(nextStep);
    } else {
      setMode('end')
      setCurrentQuestion({})
    }
  }

  const {answers, question} = currentQuestion;

  return (
    <div>
      {mode === 'start' && (
        <div>
          Start
          <button onClick={handleStartClick}>start</button>
        </div>
      )}
       {mode === 'game' && (
        <div>
          <div>
            <h2>{question}</h2>
            <div onClick={handleAnswer}>
              <button>
                <b>{answers[0]}</b>
              </button>
              <button>
                <b>{answers[1]}</b>
              </button>
              <button>
                <b>{answers[2]}</b>
              </button>
              <button>
                <b>{answers[3]}</b>
              </button>
            </div>
          </div>
          <div>
        {!!prise.length && map(prise, (prise, index) => (<div key={index}>{prise}</div>)).reverse()}
          </div>
        </div>
      )}
      {mode === 'end' && (
        <div>
          <div>
            Total score: 
            <b>$ {!priseStep ? 0 : prise[priseStep - 1]} earned</b>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
