import { Console } from '@woowacourse/mission-utils';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';
import DELIMITER from '../constants/delimiter/delimiter.js';

const InputView = {
  async readLottoBuyers() {
    const buyers = await Console.readLineAsync(PROGRESS_MESSAGE.read_lotto_buyers);

    return buyers.split(DELIMITER.comma).map((buyer) => buyer.trim());
  },
  async readBonusNumber() {
    const number = await Console.readLineAsync(PROGRESS_MESSAGE.read_bonus_number);

    return Number(number);
  },

  async readAmountOfBoughtLotto(buyer) {
    const amountOfLotto = await Console.readLineAsync(PROGRESS_MESSAGE.amount_of_lotto(buyer));

    return Number(amountOfLotto) / 1000;
  },
};

export default InputView;
