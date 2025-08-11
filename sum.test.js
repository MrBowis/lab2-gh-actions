const add = require('./sum');

test('Add two numbers', () => {
  expect(add(1, 2)).toBe(3);
});

test('Add two negative numbers', () => {
  expect(add(-1, -2)).toBe(-3);
});

test('Add a positive and a negative number', () => {
  expect(add(1, -2)).toBe(-1);
});

test('Add zero to a number', () => {
  expect(add(0, 5)).toBe(5);
});

test('Add two zeros', () => {
  expect(add(0, 0)).toBe(0);
});

test('Add two large numbers', () => {
  expect(add(1000000, 2000000)).toBe(3000000);
});

test('Add two decimal numbers', () => {
  expect(add(1.5, 2.5)).toBe(4);
});