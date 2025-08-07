import { add } from './sum.js';
import { describe, test, expect } from '@jest/globals';

describe('add', () => {
    test('adds two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('adds two negative numbers', () => {
        expect(add(-2, -3)).toBe(-5);
    });

    test('adds a positive and a negative number', () => {
        expect(add(5, -3)).toBe(2);
    });

    test('adds zero and a number', () => {
        expect(add(0, 7)).toBe(7);
        expect(add(7, 0)).toBe(7);
    });

    test('adds two zeros', () => {
        expect(add(0, 0)).toBe(0);
    });

    test('adds decimal numbers', () => {
        expect(add(2.5, 3.1)).toBeCloseTo(5.6);
    });

    test('adds large numbers', () => {
        expect(add(1000000, 2000000)).toBe(3000000);
    });
});