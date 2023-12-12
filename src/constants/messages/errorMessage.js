import deepFreeze from '../../utils/deepFreeze.js';

const ERROR_MESSAGES = deepFreeze({
  invalid_type: '당첨 번호는 양의 정수여야합니다!',
  invalid_bonus_number: '보너스 숫자는 1이상 20이하의 숫자여야합니다!',
  have_duplication_bonus_number: '당첨 번호와 보너스 숫자는 중복되면 안됩니다!',
  invalid_buyer_length: '로또 구매자는 최소 1명이상 5명 이하여야해요!',
  invalid_buyer_name_length: '로또 구매자의 이름은 최소 1자 이상 4자 이하여야해요!',
  have_space_buyer_name: '구매자 이름에 공백이 포함되면 안돼요!',
  invalid_lotto_amount: '로또 구입 갯수는 1개 이상 100개 이하여야합니다!',
  not_divided_lotto_amount: '로또 구입 갯수는 1000원 단위여야합니다!',
});

export default ERROR_MESSAGES;
