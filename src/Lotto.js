import generateNewRandomNumber from './utils/generateNewRandomNumber.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static generateNewLotto() {
    const newLotto = new Lotto(generateNewRandomNumber());

    return newLotto.getLottoNumber();
  }

  getLottoNumber() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

export default Lotto;
