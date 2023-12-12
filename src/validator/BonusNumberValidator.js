import AppError from '../error/AppError.js';
import ERROR_MESSAGES from '../constants/messages/errorMessage.js';
import CONDITION from '../constants/condition/condition.js';

class BonusNumberValidator {
  static validateBonusNumber(winningLottoNumbers, bonusNumber) {
    if (!Number.isInteger(bonusNumber)) {
      throw new AppError(ERROR_MESSAGES.invalid_type);
    }

    if (winningLottoNumbers.includes(bonusNumber)) {
      throw new AppError(ERROR_MESSAGES.have_duplication_bonus_number);
    }

    if (bonusNumber < CONDITION.min_bonus_number || bonusNumber > CONDITION.max_bonus_number) {
      throw new AppError(ERROR_MESSAGES.invalid_bonus_number);
    }
  }
}

export default BonusNumberValidator;
