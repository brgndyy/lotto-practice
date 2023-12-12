import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import OutputView from './views/OutputView.js';
import Lotto from './Lotto.js';
import InputView from './views/InputView.js';
import BonusNumberValidator from './validator/BonusNumberValidator.js';

class App {
  #winningLottoNumbers;

  #bonusNumber;

  constructor() {
    this.#winningLottoNumbers = Lotto.generateNewLotto();
  }

  async play() {
    this.#printWinnigLottoNumbersExceptBonusNumber();
    await asyncFunctionHandlerWithError(this.#generateWinningLotto, this);
  }

  #printWinnigLottoNumbersExceptBonusNumber() {
    OutputView.printWinningLottoNumbersExceptBonus(this.#winningLottoNumbers);
  }

  async #generateWinningLotto() {
    this.#bonusNumber = await InputView.readBonusNumber();

    BonusNumberValidator.validateBonusNumber(this.#winningLottoNumbers, this.#bonusNumber);
  }
}

export default App;
