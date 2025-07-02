import { factorial } from "@/colt_steel/recursion/factorial"

describe('Factorial', () => {
    test('factorial(4) = 24', () => {
        expect(factorial(4)).toBe(24)
    })

    test('factorial(5) = 120', () => {
        expect(factorial(5)).toBe(120)
    })
})