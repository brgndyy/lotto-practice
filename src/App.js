import Lotto from './Lotto.js';
import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import OutputView from './views/OutputView.js';
import InputView from './views/InputView.js';
import BonusNumberValidator from './validator/BonusNumberValidator.js';
import LottoBuyerValidator from './validator/LottoBuyerValidator.js';
import AmountOfBoughtLottoValidator from './validator/AmountOfBoughtLottoValidator.js';

class App {
  #winningLottoNumbers = {
    winnigLotto: [],
    bonusNumber: 0,
  };

  #totalBuyersInfo = [];

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

    OutputView.divideLine();
  }

  async #generateWinningLotto() {
    const bonusNumber = await InputView.readBonusNumber();
    BonusNumberValidator.validateBonusNumber(this.#winningLottoNumbers.winnigLotto, bonusNumber);
    this.#winningLottoNumbers.bonusNumber = bonusNumber;

    OutputView.divideLine();
  }

  async #readLottoBuyers() {
    this.#lottoBuyers = await InputView.readLottoBuyers();
    LottoBuyerValidator.validateBuyer(this.#lottoBuyers);

    OutputView.divideLine();
  }

  async #readAmountOfLottoOfBuyer() {
    await this.#lottoBuyers.reduce(async (previousPromise, buyer) => {
      await previousPromise;
      await asyncFunctionHandlerWithError(() => this.#readAndValidateAmountOfLotto(buyer), this);
    }, Promise.resolve());
  }

  async #readAndValidateAmountOfLotto(buyer) {
    const amountOfBoughtLotto = await InputView.readAmountOfBoughtLotto(buyer);
    AmountOfBoughtLottoValidator.validateAmountOfLotto(amountOfBoughtLotto);

    const totalBoughtLottoNumbers = Array.from(
      { length: amountOfBoughtLotto },
      Lotto.generateNewLotto,
    );
    this.#totalBuyersInfo.push({ name: buyer, totalBoughtLottoNumbers });

    OutputView.divideLine();
  }
}

export default App;
