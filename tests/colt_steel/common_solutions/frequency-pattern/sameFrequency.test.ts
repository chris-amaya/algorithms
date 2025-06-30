import { sameFrequency } from "@/colt_steel/common_solutions/frequency-pattern/sameFrequency"

describe('sameFrequency', e => {
    test("Should return true", (e) => {
        expect(sameFrequency(182, 281)).toBe(true)
        expect(sameFrequency(3589578, 5879385)).toBe(true)
    })

    test('Should return false', (e) => {
        expect(sameFrequency(34, 14)).toBe(false)
        expect(sameFrequency(22, 222)).toBe(false)
    })
})