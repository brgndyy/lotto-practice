import { Console } from '@woowacourse/mission-utils';
import DELIMITER from '../constants/delimiter/delimiter.js';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';

const OutputView = {
  printWinningLottoNumbersExceptBonus(winningLottoNumbers) {
    Console.print(PROGRESS_MESSAGE.winning_lotto_numbers_except_bonus);
    Console.print(`[${winningLottoNumbers.join(', ')}]`);
  },

  printErrorMessage(message) {
    Console.print(message);
  },

  divideLine() {
    Console.print(DELIMITER.space);
  },
};

export default OutputView;
