const { fibonacci, factorial, dijkstra } = require('./math');

test('Fibonacci de 5', () => {
  expect(fibonacci(5)).toBe(5);
});

test('Fibonacci de 0', () => {
  expect(fibonacci(0)).toBe(0);
});

test('Factorial de 5', () => {
  expect(factorial(5)).toBe(120);
});

test('Factorial de 0', () => {
  expect(factorial(0)).toBe(1);
});

test('Dijkstra de un grafo simple', () => {
  const graph = {
    A: { B: 1, C: 4 },
    B: { C: 2 },
    C: {}
  };
  expect(dijkstra(graph, 'A')).toEqual({ A: 0, B: 1, C: 3 });
});

test('Dijkstra de un solo nodo', () => {
  const graph = { A: {} };
  expect(dijkstra(graph, 'A')).toEqual({ A: 0 });
});
