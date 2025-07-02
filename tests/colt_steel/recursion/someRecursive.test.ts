import { someRecursive } from "@/colt_steel/recursion/someRecursive"

const isOdd = (val: number) => val % 2 !== 0;


describe('someRecursive', () => {
    test('Should detect if is odd', () => {
        expect(someRecursive([1, 2, 3, 4], isOdd)).toBe(true)
        expect(someRecursive([4,6,8,9], isOdd)).toBe(true)
        expect(someRecursive([4,6,8], isOdd)).toBe(false)
        expect(someRecursive([4,6,8], val => val > 10)).toBe(false)
    })
})