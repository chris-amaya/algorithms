import { collectMatching } from "@/colt_steel/recursion/collectMatching";

const isOdd = (val: number) => val % 2 !== 0;


describe('someRecursive', () => {
    test('Should detect if is odd', () => {
        expect(collectMatching([[1, [2, [3, 4, 5]], 6]], isOdd)).toBe([1, 3, 5])
        // expect(collectMatching([4,6,8,9], isOdd)).toBe(true)
        // expect(collectMatching([4,6,8], isOdd)).toBe(false)
        // expect(collectMatching([4,6,8], val => val > 10)).toBe(false)
    })
})