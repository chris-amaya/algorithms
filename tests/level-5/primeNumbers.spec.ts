import { describe, it, expect } from 'vitest';
import { isPrime, getPrimes } from '../../src/level-5/primeNumbers';

describe('isPrime', () => {
    it('should return false for 0', () => {
        expect(isPrime(0)).toBe(false);
    });

    it('should return false for 1', () => {
        expect(isPrime(1)).toBe(false);
    });

    it('should return true for 2', () => {
        expect(isPrime(2)).toBe(true);
    });

    it('should return true for 3', () => {
        expect(isPrime(3)).toBe(true);
    });

    it('should return false for 4', () => {
        expect(isPrime(4)).toBe(false);
    });

    it('should return true for 5', () => {
        expect(isPrime(5)).toBe(true);
    });
});

describe('getPrimes', () => {
    it('should return an empty array for range 0 to 0', () => {
        expect(getPrimes(0, 0)).toEqual([]);
    });

    it('should return all primes between 0 and 30', () => {
        expect(getPrimes(0, 30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });

    it('should return all primes between 30 and 0', () => {
        expect(getPrimes(30, 0)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });
});