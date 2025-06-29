import { some } from "@/colt_steel/common_solutions/frequencyPattern"

describe('Frequency Patter', (e) => {
    test('should return false when values index mismatch', () => {
        expect(some([1, 2, 3, 4], [1, 2, 3])).toBe(false)
    })

    test('Should return false if frequencies mismatch', (e) => {
        expect(some([1, 2, 3, 3], [1, 4, 4, 9])).toBe(false)
    })

    test('Should return true if frequencies match', (e) => {
        expect(some([1, 2, 3, 3], [1, 4, 9, 9])).toBe(true)
    })
})