const getFee = require('../services/getFees');
const mock = require('../input.json');

test('if utils mocked automatically', () => {
  expect(getFee(mock)).toStrictEqual([0.06, 0.9, 87, 3, 0.3, 0.3, 5, 0, 0]);
});
