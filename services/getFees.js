const getCashInFee = require('./getCashInFee');
const getCashOutFee = require('./getCashOutFee');

const CASH_IN = 'cash_in';
const CASH_OUT = 'cash_out';

const getFeeByTransactionType = {
  [CASH_IN]: getCashInFee,
  [CASH_OUT]: getCashOutFee,
};

const getFees = (transactions) => {
  if (!Array.isArray(transactions)) {
    throw new Error('Transactions must be an array');
  }

  if (transactions.length === 0) {
    throw new Error('Transactions array is empty');
  }

  return transactions.map((transaction) => getFeeByTransactionType[transaction.type](transaction));
};

module.exports = getFees;
