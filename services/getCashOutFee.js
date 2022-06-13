const getCacheOutLegalPersonFee = require('./getCacheOutLegalPersonFee');
const getCacheOutNaturalPersonFee = require('./getCacheOutNaturalPersonFee');

const NATURAL_PERSON = 'natural';
const LEGAL_PERSON = 'juridical';

const getFeeByPersonType = {
  [NATURAL_PERSON]: getCacheOutNaturalPersonFee,
  [LEGAL_PERSON]: getCacheOutLegalPersonFee,
};

const getCashOutFee = (transaction) => getFeeByPersonType[transaction.user_type](transaction);

module.exports = getCashOutFee;
