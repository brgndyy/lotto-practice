<<<<<<< HEAD
import OutputView from './views/OutputView.js';
import Lotto from './Lotto.js';
=======
import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import OutputView from './views/OutputView.js';
import Lotto from './Lotto.js';
import InputView from './views/InputView.js';
import BonusNumberValidator from './validator/BonusNumberValidator.js';
>>>>>>> main

class App {
  #winningLottoNumbers;

  #bonusNumber;

  constructor() {
    this.#winningLottoNumbers = Lotto.generateNewLotto();
  }

  async play() {
    this.#printWinnigLottoNumbersExceptBonusNumber();
<<<<<<< HEAD
=======
    await asyncFunctionHandlerWithError(this.#generateWinningLotto, this);
>>>>>>> main
  }

  #printWinnigLottoNumbersExceptBonusNumber() {
    OutputView.printWinningLottoNumbersExceptBonus(this.#winningLottoNumbers);
  }
<<<<<<< HEAD
=======

  async #generateWinningLotto() {
    this.#bonusNumber = await InputView.readBonusNumber();

    BonusNumberValidator.validateBonusNumber(this.#winningLottoNumbers, this.#bonusNumber);
  }
>>>>>>> main
}

export default App;
