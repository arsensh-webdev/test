const roundUp = require('../utils/roundUp');

test('roundUp', () => {
  expect(roundUp(1, 2)).toBe(1);
  expect(roundUp(3424234, 2)).toBe(3424234);
  expect(roundUp(0.06, 2)).toBe(0.06);
  expect(roundUp(0.1, 2)).toBe(0.1);
  expect(roundUp(0.89, 2)).toBe(0.89);
  expect(roundUp(0.01, 2)).toBe(0.01);
  expect(roundUp(0.012, 2)).toBe(0.02);
  expect(roundUp(0.0123, 2)).toBe(0.02);
  expect(roundUp(0.023, 2)).toBe(0.03);
  expect(roundUp(0.02004, 2)).toBe(0.03);
  expect(roundUp(0.089, 2)).toBe(0.09);
});
