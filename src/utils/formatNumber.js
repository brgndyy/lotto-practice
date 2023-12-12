import markBonusNumber from './markBonusNumber.js';
import markWinningNumber from './markWinningNumber.js';

const formatNumber = (number, winningLottoNumbers) =>
  markBonusNumber(
    markWinningNumber(number, winningLottoNumbers.winningLotto),
    winningLottoNumbers.bonusNumber,
  );

export default formatNumber;
