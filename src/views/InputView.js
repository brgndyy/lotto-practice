import { Console } from '@woowacourse/mission-utils';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';

const InputView = {
  async readBonusNumber() {
    const number = await Console.readLineAsync(PROGRESS_MESSAGE.read_bonus_number);

    return Number(number);
  },
};

export default InputView;
