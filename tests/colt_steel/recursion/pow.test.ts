import { pow } from "@/colt_steel/recursion/pow"

describe("countZeros", () => {
    test('Should return correct value', () => {
        expect(pow(3, 3)).toBe(27)
        expect(pow(3, 4)).toBe(81)
    })
})
