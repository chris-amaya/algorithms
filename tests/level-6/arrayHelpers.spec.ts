import { describe, it, expect } from 'vitest';
import '@/level-6/arrayHelpers'


describe('Array extension methods', () => {
    const numbers = [1, 2, 3, 4, 5];

    it('square() should return an array of squared numbers', () => {
        expect(numbers.square()).toEqual([1, 4, 9, 16, 25]);
    });

    it('cube() should return an array of cubed numbers', () => {
        expect(numbers.cube()).toEqual([1, 8, 27, 64, 125]);
    });

    it('average() should return the average of the numbers', () => {
        expect(numbers.average()).toBe(3);
    });

    it('sum() should return the sum of the numbers', () => {
        expect(numbers.sum()).toBe(15);
    });

    it('even() should return an array of even numbers', () => {
        expect(numbers.even()).toEqual([2, 4]);
    });

    it('odd() should return an array of odd numbers', () => {
        expect(numbers.odd()).toEqual([1, 3, 5]);
    });

    it('average() should return NaN for an empty array', () => {
        expect([].average()).toBeNaN();
    });

    it('sum() should return 0 for an empty array', () => {
        expect([].sum()).toBe(0);
    });

    it('even() should return an empty array for an empty array', () => {
        expect([].even()).toEqual([]);
    });

    it('odd() should return an empty array for an empty array', () => {
        expect([].odd()).toEqual([]);
    });
});