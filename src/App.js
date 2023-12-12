import Lotto from './Lotto.js';
import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import OutputView from './views/OutputView.js';
import InputView from './views/InputView.js';
import BonusNumberValidator from './validator/BonusNumberValidator.js';
import LottoBuyerValidator from './validator/LottoBuyerValidator.js';

class App {
  #winningLottoNumbers = {
    winnigLotto: [],
    bonusNumber: 0,
  };

  #lottoBuyers;

  constructor() {
    this.#winningLottoNumbers.winnigLotto = Lotto.generateNewLotto();
  }

  async play() {
    this.#printWinnigLottoNumbersExceptBonusNumber();
    await asyncFunctionHandlerWithError(this.#generateWinningLotto, this);
    await asyncFunctionHandlerWithError(this.#readLottoBuyers, this);
    await asyncFunctionHandlerWithError(this.#readAmountOfLottoOfBuyer, this);
  }

  #printWinnigLottoNumbersExceptBonusNumber() {
    OutputView.printWinningLottoNumbersExceptBonus(this.#winningLottoNumbers.winnigLotto);
  }

  async #generateWinningLotto() {
    const bonusNumber = await InputView.readBonusNumber();
    BonusNumberValidator.validateBonusNumber(this.#winningLottoNumbers.winnigLotto, bonusNumber);

    this.#winningLottoNumbers.bonusNumber = bonusNumber;
  }

  async #readLottoBuyers() {
    this.#lottoBuyers = await InputView.readLottoBuyers();

    LottoBuyerValidator.validateBuyer(this.#lottoBuyers);
  }

  async #readAmountOfLottoOfBuyer() {}
}

export default App;
