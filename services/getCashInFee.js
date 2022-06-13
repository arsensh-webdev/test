const roundUp = require('../utils/roundUp');

const COMMISSION = 0.03;
const MAX_COMMISSION_AMOUNT = 5;

const getCashInFee = (transaction) => {
  const fee = roundUp((transaction.operation.amount / 100) * COMMISSION, 2);

  if (fee > MAX_COMMISSION_AMOUNT) {
    return MAX_COMMISSION_AMOUNT;
  }

  return fee;
};

module.exports = getCashInFee;
