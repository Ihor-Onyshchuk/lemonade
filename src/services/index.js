import {shuffle} from 'lodash';
import {data} from '../data';

export const dataFormater = (step = 500) => {
  let resultAnswers;
  const currentQuestion = shuffle(data[step])[0];
  const {answers, correct, id, question} = currentQuestion;
  const correctAnswer = shuffle(correct)[0];

  if (answers.length < 3) {
    const answersArray = new Array(3 - answers.length).fill(answers[0]).concat(answers);
    resultAnswers =shuffle([...answersArray, correctAnswer]);
  }

  if (answers.length > 3) {
    const answersArray = shuffle(answers).slice(0, 3);
    resultAnswers = [...answersArray, correctAnswer];
  }

  return {
    id,
    question,
    correct: correctAnswer,
    answers: resultAnswers,
  }
}

