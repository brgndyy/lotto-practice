import deepFreeze from '../../utils/deepFreeze.js';

const PROGRESS_MESSAGE = deepFreeze({
  winning_lotto_numbers_except_bonus: '당첨 번호입니다.',
  read_bonus_number: '보너스 번호를 입력해 주세요.\n',
  read_lotto_buyers: '로또 구매자를 입력해주세요. (,기준)\n',
  amount_of_lotto: (buyer) => `${buyer}의 로또 금액을 입력해주세요.\n`,
  start_result: (name) => `${name}의 로또 통계 결과입니다.`,
  result_length: (amount) => `${amount}개를 구매했습니다.`,
  is_winning_lotto_number: '당첨 번호입니다.',
  is_result: '당첨 결과 입니다.',
  statistics_start: '당첨 통계 입니다.\n---',
  statistics_result: (rank, prize, count) => `${rank}개 일치 (${prize}) - ${count}개`,
  total_profit_rate: (profitRate) => `총 수익률은 ${profitRate.toFixed(2)}%입니다.`,
});

export default PROGRESS_MESSAGE;
