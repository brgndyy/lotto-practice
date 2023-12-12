import { Random } from '@woowacourse/mission-utils';
import CONDITION from '../constants/condition/condition.js';

const generateNewRandomNumber = () => {
  return Random.pickUniqueNumbersInRange(
    CONDITION.min_lotto_num,
    CONDITION.max_lotto_num,
    CONDITION.lotto_length,
  );
};

export default generateNewRandomNumber;
