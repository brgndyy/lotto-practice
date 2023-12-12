import { Console } from '@woowacourse/mission-utils';
import DELIMITER from '../constants/delimiter/delimiter.js';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';
import formatNumber from '../utils/formatNumber.js';
import PRIZE_MONEY from '../constants/prizeMoney/prizeMoeny.js';

const OutputView = {
  printWinningLottoNumbersExceptBonus(winningLottoNumbers) {
    Console.print(PROGRESS_MESSAGE.winning_lotto_numbers_except_bonus);
    Console.print(
      `${DELIMITER.open}${winningLottoNumbers.join(`${DELIMITER.comma}${DELIMITER.space}`)}${
        DELIMITER.close
      }`,
    );
  },

  printStatisticalResultStart(name) {
    Console.print(PROGRESS_MESSAGE.start_result(name));
  },

  printBoughtLottoHistory(totalBoughtLottoNumbers) {
    Console.print(PROGRESS_MESSAGE.result_length(totalBoughtLottoNumbers.length));
    totalBoughtLottoNumbers.forEach((lotto) => {
      Console.print(
        `${DELIMITER.open}${lotto.join(`${DELIMITER.comma}${DELIMITER.space}`)}${DELIMITER.close}`,
      );
    });
  },

  printTotalWinningLotto(winningLottoNumbers) {
    Console.print(PROGRESS_MESSAGE.is_winning_lotto_number);
    Console.print(
      `${DELIMITER.open}${winningLottoNumbers.winningLotto.join(
        `${DELIMITER.comma}${DELIMITER.space}`,
      )}${DELIMITER.close} + ${DELIMITER.open}${winningLottoNumbers.bonusNumber}${DELIMITER.close}`,
    );
  },

  printTotalWinningResult(winningLottoNumbers, totalBoughtLottoNumbers) {
    const formattedNumbers = totalBoughtLottoNumbers.map((lotto) =>
      lotto
        .map((number) => formatNumber(number, winningLottoNumbers))
        .join(`${DELIMITER.comma}${DELIMITER.space}`),
    );

    formattedNumbers.forEach((formattedNumber) => {
      Console.print(`${DELIMITER.open}${formattedNumber}${DELIMITER.close}`);
    });
  },

  printTotalStatisticsResult(ranks, profitRate) {
    Console.print(PROGRESS_MESSAGE.statistics_start);

    Object.keys(ranks)
      .reverse()
      .forEach((rank) => {
        const count = ranks[rank];
        const prize = PRIZE_MONEY[rank];
        Console.print(PROGRESS_MESSAGE.statistics_result(rank, prize, count));
      });

    Console.print(PROGRESS_MESSAGE.total_profit_rate(profitRate));
  },

  printErrorMessage(message) {
    Console.print(message);
  },

  divideLine() {
    Console.print(DELIMITER.space);
  },
};

export default OutputView;
