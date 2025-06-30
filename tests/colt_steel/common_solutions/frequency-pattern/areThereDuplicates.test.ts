import { areThereDuplicates } from "@/colt_steel/common_solutions/frequency-pattern/areThereDuplicates"

describe('areThereDuplicates', (e) => {
    test('Should return false', (e) => {
        expect(areThereDuplicates(1, 2, 3)).toBe(false)
    })

    test('Should return true', e => {
        expect(areThereDuplicates(1, 2, 2)).toBe(true)
        expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true)
    })
})