import deepFreeze from '../../utils/deepFreeze.js';

const CONDITION = deepFreeze({
  min_lotto_num: 1,
  max_lotto_num: 45,
  lotto_length: 6,
  min_bonus_number: 1,
  max_bonus_number: 20,
  buyers_min_length: 1,
  buyers_max_length: 5,
  buyers_name_min_length: 1,
  buyer_name_max_length: 4,
  min_lotto_amount: 1,
  max_lotto_amount: 100,
  lotto_price: 1000,
  winning_check: '✓',
  bonus_check: '•',
  first_winner_match_count: 6,
  second_winner_match_count: 5,
  third_winner_match_count: 4,
  fourth_winner_match_count: 3,
});

export default CONDITION;
