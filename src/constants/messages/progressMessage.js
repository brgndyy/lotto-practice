import deepFreeze from '../../utils/deepFreeze.js';

const PROGRESS_MESSAGE = deepFreeze({
  winning_lotto_numbers_except_bonus: '당첨 번호입니다.',
  read_bonus_number: '보너스 번호를 입력해 주세요.\n',
  read_lotto_buyers: '로또 구매자를 입력해주세요. (,기준)\n',
  amount_of_lotto: (buyer) => `${buyer}의 로또 금액을 입력해주세요.\n`,
});

export default PROGRESS_MESSAGE;
