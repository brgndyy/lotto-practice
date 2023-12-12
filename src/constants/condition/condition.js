import deepFreeze from '../../utils/deepFreeze.js';

const CONDITION = deepFreeze({
  min_lotto_num: 1,
  max_lotto_num: 45,
  lotto_length: 6,
  min_bonus_number: 1,
  max_bonus_number: 20,
});

export default CONDITION;
