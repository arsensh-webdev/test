const roundUp = require('../utils/roundUp');

const COMMISSION = 0.3;
const MINIMUM_COMMISSION_AMOUNT = 0.5;

const getCacheOutLegalPersonFee = (transaction) => {
  const fee = roundUp((transaction.operation.amount / 100) * COMMISSION, 2);

  if (fee < MINIMUM_COMMISSION_AMOUNT) {
    return MINIMUM_COMMISSION_AMOUNT;
  }

  return fee;
};

module.exports = getCacheOutLegalPersonFee;
