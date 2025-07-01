import { countZeros } from "@/colt_steel/common_solutions/divide-conquer/countZeros"

describe("countZeros", () => {
    test('Should return false', () => {
        expect(countZeros([1,1,1,1, 0, 0])).toBe(2)
        expect(countZeros([1,0,0,0,0])).toBe(4)
        expect(countZeros([0,0,0])).toBe(3)
        expect(countZeros([1, 1, 1, 1])).toBe(0)
    })
})

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//             length/2 + lenght / 2