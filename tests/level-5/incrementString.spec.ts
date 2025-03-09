import { describe, it, expect } from 'vitest';
import { incrementString } from '../../src/level-5/incrementString';

// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.
describe('incrementString', () => {
    it('should append 1 to a string without a number', () => {
        expect(incrementString('foo')).toBe('foo1');
    });

    it('should increment the number at the end of the string', () => {
        expect(incrementString('foobar23')).toBe('foobar24');
    });

    it('should preserve leading zeros when incrementing', () => {
        expect(incrementString('foo0042')).toBe('foo0043');
    });

    it('should handle single digit numbers', () => {
        expect(incrementString('foo9')).toBe('foo10');
    });

    it('should handle carry over with leading zeros', () => {
        expect(incrementString('foo099')).toBe('foo100');
    });

    it('should handle empty string', () => {
        expect(incrementString('')).toBe('1');
    });

    it('should handle string with only numbers', () => {
        expect(incrementString('123')).toBe('124');
    });

    it('should handle string with leading zeros and no letters', () => {
        expect(incrementString('009')).toBe('010');
    });

    it('should handle string with letters and no numbers', () => {
        expect(incrementString('bar')).toBe('bar1');
    });

    it('should handle numbers in the middle of the string', () => {
        expect(incrementString('fo99obar99')).toBe('fo99obar100');
    });
});
