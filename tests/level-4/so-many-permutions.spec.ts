import { describe, it, expect } from 'vitest';
import { soManyPermutions } from '../../src/level-4/so-many-permutions';

describe.skip('soManyPermutions', () => {
    it('should return ["a"] for input "a"', () => {
        expect(soManyPermutions('a')).toEqual(['a']);
    });

    it('should return ["ab", "ba"] for input "ab"', () => {
        expect(soManyPermutions('ab')).toEqual(['ab', 'ba']);
    });

    it('should return ["abc", "acb", "bac", "bca", "cab", "cba"] for input "abc"', () => {
        expect(soManyPermutions('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
    });

    it('should return ["aabb", "abab", "abba", "baab", "baba", "bbaa"] for input "aabb"', () => {
        expect(soManyPermutions('aabb')).toEqual(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']);
    });

    it('should return ["abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "bacd", "badc", "bcad", "bcda", "bdac", "bdca", "cabd", "cadb", "cbad", "cbda", "cdab", "cdba", "dabc", "dacb", "dbac", "dbca", "dcab", "dcba"] for input "abcd"', () => {
        expect(soManyPermutions('abcd')).toEqual([
            'abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb', 'bacd', 'badc', 'bcad', 'bcda', 'bdac', 'bdca', 'cabd', 'cadb', 'cbad', 'cbda', 'cdab', 'cdba', 'dabc', 'dacb', 'dbac', 'dbca', 'dcab', 'dcba'
        ]);
    });
});