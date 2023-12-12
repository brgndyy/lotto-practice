import Lotto from './Lotto.js';
import asyncFunctionHandlerWithError from './utils/asyncFunctionHandlerWithError.js';
import OutputView from './views/OutputView.js';
import InputView from './views/InputView.js';
import BonusNumberValidator from './validator/BonusNumberValidator.js';
import LottoBuyerValidator from './validator/LottoBuyerValidator.js';
import AmountOfBoughtLottoValidator from './validator/AmountOfBoughtLottoValidator.js';
import StatisticsCalculator from './services/StatisticsCalculator.js';

class App {
  #winningLottoNumbers = {
    winningLotto: [],
    bonusNumber: 0,
  };

  #totalBuyersInfo = [];

  #lottoBuyers;

  constructor() {
    this.#winningLottoNumbers.winningLotto = Lotto.generateNewLotto();
  }

  async play() {
    this.#printWinnigLottoNumbersExceptBonusNumber();
    await asyncFunctionHandlerWithError(this.#generateWinningLotto, this);
    await asyncFunctionHandlerWithError(this.#readLottoBuyers, this);
    await asyncFunctionHandlerWithError(this.#readAmountOfLottoOfBuyer, this);
    this.#printStatisticalResult();
  }

  #printWinnigLottoNumbersExceptBonusNumber() {
    OutputView.printWinningLottoNumbersExceptBonus(this.#winningLottoNumbers.winningLotto);

    OutputView.divideLine();
  }

  async #generateWinningLotto() {
    const bonusNumber = await InputView.readBonusNumber();
    BonusNumberValidator.validateBonusNumber(this.#winningLottoNumbers.winningLotto, bonusNumber);
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

  #printStatisticalResult() {
    this.#totalBuyersInfo.forEach((buyer) => {
      this.#printStatisticalResultStart(buyer.name);
      this.#printBoughtLottoHistory(buyer.totalBoughtLottoNumbers);
      this.#printTotalWinningLotto(this.#winningLottoNumbers);
      this.#printTotalWinningResult(this.#winningLottoNumbers, buyer.totalBoughtLottoNumbers);
      this.#printTotalPrintStatisticalResult(
        this.#winningLottoNumbers,
        buyer.totalBoughtLottoNumbers,
      );
    });
  }

  #printStatisticalResultStart(name) {
    OutputView.printStatisticalResultStart(name);
    OutputView.divideLine();
  }

  #printBoughtLottoHistory(totalBoughtLottoNumbers) {
    OutputView.printBoughtLottoHistory(totalBoughtLottoNumbers);
    OutputView.divideLine();
  }

  #printTotalWinningLotto(winningLottoNumbers) {
    OutputView.printTotalWinningLotto(winningLottoNumbers);
    OutputView.divideLine();
  }

  #printTotalWinningResult(winningLottoNumbers, totalBoughtLottoNumbers) {
    OutputView.printTotalWinningResult(winningLottoNumbers, totalBoughtLottoNumbers);
    OutputView.divideLine();
  }

  #printTotalPrintStatisticalResult(winningLottoNumbers, totalBoughtLottoNumbers) {
    const { ranks, profitRate } = StatisticsCalculator.calculateTotalStatistics(
      winningLottoNumbers,
      totalBoughtLottoNumbers,
    );

    OutputView.printTotalStatisticsResult(ranks, profitRate);
  }
}

export default App;
