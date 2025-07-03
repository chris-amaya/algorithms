import { capitilizeFirst } from "@/colt_steel/recursion/capitalizeFirst"

describe('capitalizeFirst', () => { 
    test('should capitilize correctly', () => {
        expect(capitilizeFirst(['car', 'taco', 'banana'])).toStrictEqual(['Car', 'Taco', 'Banana'])
    })
 })