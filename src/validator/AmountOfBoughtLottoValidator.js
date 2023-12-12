import CONDITION from '../constants/condition/condition.js';
import ERROR_MESSAGES from '../constants/messages/errorMessage.js';
import AppError from '../error/AppError.js';

class AmountOfBoughtLottoValidator {
  static validateAmountOfLotto(amountOfBoughtLotto) {
    if (
      amountOfBoughtLotto < CONDITION.min_lotto_amount ||
      amountOfBoughtLotto > CONDITION.max_lotto_amount
    ) {
      throw new AppError(ERROR_MESSAGES.invalid_lotto_amount);
    }

    if (!Number.isInteger(amountOfBoughtLotto)) {
      throw new AppError(ERROR_MESSAGES.not_divided_lotto_amount);
    }
  }
}

export default AmountOfBoughtLottoValidator;
