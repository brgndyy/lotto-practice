import deepFreeze from '../../utils/deepFreeze.js';

const ERROR_MESSAGES = deepFreeze({
  invalid_type: '당첨 번호는 양의 정수여야합니다!',
  invalid_bonus_number: '보너스 숫자는 1이상 20이하의 숫자여야합니다!',
  have_duplication_bonus_number: '당첨 번호와 보너스 숫자는 중복되면 안됩니다!',
});

export default ERROR_MESSAGES;
