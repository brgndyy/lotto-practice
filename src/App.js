import OutputView from './views/OutputView.js';
import Lotto from './Lotto.js';

class App {
  #winningLottoNumbers;

  #bonusNumber;

  constructor() {
    this.#winningLottoNumbers = Lotto.generateNewLotto();
  }

  async play() {
    this.#printWinnigLottoNumbersExceptBonusNumber();
  }

  #printWinnigLottoNumbersExceptBonusNumber() {
    OutputView.printWinningLottoNumbersExceptBonus(this.#winningLottoNumbers);
  }
}

export default App;
