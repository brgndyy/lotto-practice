import CONDITION from '../constants/condition/condition.js';
import AppError from '../error/AppError.js';
import ERROR_MESSAGES from '../constants/messages/errorMessage.js';
import DELIMITER from '../constants/delimiter/delimiter.js';

class LottoBuyerValidator {
  static validateBuyer(lottoBuyers) {
    if (
      lottoBuyers.length < CONDITION.buyers_min_length ||
      lottoBuyers.length > CONDITION.buyers_max_length
    ) {
      throw new AppError(ERROR_MESSAGES.invalid_buyer_length);
    }
    if (!LottoBuyerValidator.isValidBuyerNames(lottoBuyers)) {
      throw new AppError(ERROR_MESSAGES.invalid_buyer_name_length);
    }
  }

  static isValidBuyerNames(lottoBuyers) {
    return lottoBuyers.every((buyerName) => {
      if (buyerName.includes(DELIMITER.space)) {
        throw new AppError(ERROR_MESSAGES.have_space_buyer_name);
      }

      return (
        buyerName.length >= CONDITION.buyers_name_min_length &&
        buyerName.length <= CONDITION.buyer_name_max_length
      );
    });
  }
}

export default LottoBuyerValidator;
