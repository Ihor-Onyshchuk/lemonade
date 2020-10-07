import {shuffle, take, map} from 'lodash';
import {data} from '../data';

const dataFormater = (data) => {
  let resultAnswers;
  console.log('data', data)
  const currentQuestion = shuffle(data)[0];
  console.log('current question', currentQuestion)
  const {answers, correct, id, question} = currentQuestion;
  const correctAnswer = shuffle(correct)[0];

  if (answers.length < 3) {
    const answersArray = new Array(3 - answers.length).fill(answers[0]).concat(answers);
    resultAnswers =shuffle([...answersArray, correctAnswer]);
  }

  if (answers.length > 3) {
    const answersArray = take(shuffle(answers), 3);
    resultAnswers = [...answersArray, correctAnswer];
  }

  return {
    id,
    question,
    correct: correctAnswer,
    answers: resultAnswers,
  }
}

export const resultData = map(data, (question, step) => {
  return {
    [step]: [dataFormater(question, step)]
  }
})

console.log('result data', resultData);

