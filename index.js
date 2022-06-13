const fs = require('fs');
const getFees = require('./services/getFees');

const data = fs.readFileSync(process.argv[2]);
const transactions = JSON.parse(data);

// eslint-disable-next-line no-console
const printResult = (fees) => fees.forEach((fee) => console.log(fee.toFixed(2)));

printResult(getFees(transactions));
