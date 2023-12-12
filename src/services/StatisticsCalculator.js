import CONDITION from '../constants/condition/condition.js';

class StatisticsCalculator {
  #initializedRank = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  #PRIZE_MONEY = {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
  };

  static calculateTotalStatistics(winningLottoNumbers, totalBoughtLottoNumbers) {
    const calculator = new StatisticsCalculator();
    calculator.#processLottos(winningLottoNumbers, totalBoughtLottoNumbers);

    const totalPrize = calculator.#calculateTotalPrize();
    const totalSpent = totalBoughtLottoNumbers.length * CONDITION.lotto_price;

    return {
      ranks: calculator.#initializedRank,
      totalPrize,
      totalSpent,
      profit: totalPrize - totalSpent,
      profitRate: ((totalPrize - totalSpent) / totalSpent) * 100,
    };
  }

  #processLottos(winningLottoNumbers, totalBoughtLottoNumbers) {
    totalBoughtLottoNumbers.forEach((lotto) => {
      this.updateRank(winningLottoNumbers, lotto);
    });
  }

  updateRank(winningLottoNumbers, boughtNumbers) {
    const count = this.#countMatches(winningLottoNumbers.winningLotto, boughtNumbers);
    const bonusMatch = boughtNumbers.includes(winningLottoNumbers.bonusNumber);

    this.#incrementRank(count, bonusMatch);
  }

  #incrementRank(count, bonusMatch) {
    if (count === CONDITION.first_winner_match_count) {
      this.#initializedRank[1]++;
    } else if (count === CONDITION.second_winner_match_count) {
      this.#initializedRank[bonusMatch ? 2 : 3]++;
    } else if (
      count === CONDITION.third_winner_match_count ||
      count === CONDITION.fourth_winner_match_count ||
      (count === 2 && bonusMatch)
    ) {
      this.#initializedRank[5]++;
    }
  }

  #countMatches(winningNumbers, boughtNumbers) {
    if (!winningNumbers) {
      return 0;
    }

    return boughtNumbers.filter((number) => winningNumbers.includes(number)).length;
  }

  #calculateTotalPrize() {
    return Object.keys(this.#initializedRank).reduce((total, rank) => {
      return total + this.#initializedRank[rank] * this.#PRIZE_MONEY[rank];
    }, 0);
  }
}

export default StatisticsCalculator;
