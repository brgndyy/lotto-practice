import CONDITION from '../constants/condition/condition.js';

const markWinningNumber = (number, winningNumbers) =>
  winningNumbers.includes(number) ? `${CONDITION.winning_check}${number}` : number;

export default markWinningNumber;
