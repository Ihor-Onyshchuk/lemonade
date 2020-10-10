import {shuffle, take} from 'lodash';

const dummyAnswers = ['hello', 'cat', 'cool', 'dude', 'McFly'];

export const getQuestion = (data, step = 500) => {
  const currentQuestion = shuffle(data[step])[0];
  const {answers, corrects, question} = currentQuestion;

  const correctAnswer = shuffle(corrects)[0];

  let wrongAnswers;
  
  if (answers.length < 3) {
    const shuffledAnswers = shuffle(dummyAnswers);
    wrongAnswers = new Array(3 - answers.length)
      .fill(null)
      .map((_, i) => shuffledAnswers[i])
      .concat(answers);
  }

  if (answers.length >= 3) {
    wrongAnswers = take(shuffle(answers), 3);
  }

  const preparedAnswers = shuffle([...wrongAnswers, correctAnswer]);

  return {
    question,
    correct: correctAnswer,
    answers: preparedAnswers,
  }
}
