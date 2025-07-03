import { flatten } from "@/colt_steel/recursion/flatten"

describe('flatten', () => { 

    test('Should flatten([1, 2, 3, [4, 5] ]) return [1, 2, 3, 4, 5]', () => {
        expect(flatten([1, 2, 3, [4, 5]])).toStrictEqual([1, 2, 3, 4, 5])
    })

    test('Should flatten([1, [2, [3, 4], [[5]]]]) return [1, 2, 3, 4, 5]', () => {
        expect(flatten([1, [2, [3, 4], [[5]]]])).toStrictEqual([1, 2, 3, 4, 5])
    })
 })