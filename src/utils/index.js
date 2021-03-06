import { number_with_delimiter } from 'number_helpers';

export const numberWithDelimiter = (number, config = {}) => number_with_delimiter(number, config);

export const drumroll = (delay = 1500) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, delay);
});
