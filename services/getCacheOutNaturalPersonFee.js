const dayjs = require('dayjs');
const weekOfYear = require('dayjs/plugin/weekOfYear');
const isoWeek = require('dayjs/plugin/isoWeek');
const roundUp = require('../utils/roundUp');

dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);

const COMMISSION = 0.3;
const LIMIT_PER_WEEK = 1000;
const usersLimits = {};

const getWeek = (date) => dayjs(date).isoWeek();

const updateCacheOutLimit = (transaction) => {
  const transactionWeek = getWeek(transaction.date);

  if (!usersLimits[transaction.user_id]) {
    usersLimits[transaction.user_id] = {
      [transactionWeek]: transaction.operation.amount,
    };
  } else if (!usersLimits[transaction.user_id][transactionWeek]) {
    usersLimits[transaction.user_id][transactionWeek] = transaction.operation.amount;
  } else {
    usersLimits[transaction.user_id][transactionWeek] += transaction.operation.amount;
  }
};

const getCacheOutNaturalPersonFee = (transaction) => {
  updateCacheOutLimit(transaction);

  const amount = usersLimits[transaction.user_id][getWeek(transaction.date)];

  if (amount > LIMIT_PER_WEEK) {
    const isFirstOvershoot = amount - transaction.operation.amount < LIMIT_PER_WEEK;

    const operationAmount = isFirstOvershoot
      ? transaction.operation.amount - LIMIT_PER_WEEK
      : transaction.operation.amount;

    return roundUp((operationAmount / 100) * COMMISSION, 2);
  }

  return 0;
};

module.exports = getCacheOutNaturalPersonFee;
