const add = require('./sum');

test('Add two numbers', () => {
  expect(add(1, 2)).toBe(3);
});