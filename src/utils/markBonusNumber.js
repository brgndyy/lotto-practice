import CONDITION from '../constants/condition/condition.js';

const markBonusNumber = (number, bonusNumber) =>
  number === bonusNumber ? `${CONDITION.bonus_check}${number}` : number;

export default markBonusNumber;
