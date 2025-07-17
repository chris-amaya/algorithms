import { linearSearch } from "@/colt_steel/search_algorithms/linearSearch"

describe('linearSearch', () => { 
    test('Should return correct index', () => {
        expect(linearSearch([1, 2, 3, 4, 5], 5)).toBe(4)
    })
    test('Should return -1 as it didnt find the value', () => {
        expect(linearSearch([1, 2, 3, 4, 5], 6)).toBe(-1)
    })
 })