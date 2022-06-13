const roundUp = (num, precision) => {
  const newPrecision = 10 ** precision;
  return Math.ceil(num * newPrecision) / newPrecision;
};

module.exports = roundUp;
