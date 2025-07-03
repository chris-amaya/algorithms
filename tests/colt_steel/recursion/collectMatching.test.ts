import { collectMatching } from "@/colt_steel/recursion/collectMatching";

const isOdd = (val: number) => val % 2 !== 0;
const isEven = (val: number) => val % 2 === 0;
const isGreaterThanTen = (val: number) => val > 10;

describe('collectMatching', () => {
    test('should find all odd numbers in nested arrays', () => {
        expect(collectMatching([1, [2, [3, 4, 5]], 6], isOdd)).toStrictEqual([1, 3, 5]);
    });

    test('should not skip values after nested array', () => {
        expect(collectMatching([[2], 4], isEven)).toStrictEqual([2, 4])
    })

    test('should find all even numbers in deeply nested arrays', () => {
        expect(collectMatching([1, [2, [4, 8]], 3], isEven)).toStrictEqual([2, 4, 8]);
    });

    test('should return an empty array if no values match', () => {
        expect(collectMatching([1, [3, [5]], 7], isEven)).toStrictEqual([]);
    });

    test('should return an empty array for empty input', () => {
        expect(collectMatching([], isOdd)).toStrictEqual([]);
    });

    test('should find values greater than 10', () => {
        expect(collectMatching([5, [12, [1, 15, 20], 9], 3], isGreaterThanTen)).toStrictEqual([12, 15, 20]);
    });

    test('should handle single value at top level', () => {
        expect(collectMatching([11], isOdd)).toStrictEqual([11]);
    });

    test('should handle single nested value', () => {
        expect(collectMatching([[8]], isEven)).toStrictEqual([8]);
    });

    test('should collect only even numbers and ignore other types', () => {
        const input = [
            2,
            "hello",
            [4, false, [6, null, "world"]],
            { value: 8 },
            [10, ["not a number"]],
            11
        ];

        expect(collectMatching(input, isEven)).toStrictEqual([2, 4, 6, 10]);
    });
});
