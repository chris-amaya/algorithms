import { reverse } from "@/colt_steel/recursion/reverse"

describe('Reverse', () => {
    test('Should awesome be amosewa', () => {
        expect(reverse('awesome')).toBe('emosewa')
    })

    test('Should rithmschool be loohcsmhtir', () => {
        expect(reverse('rithmschool')).toBe('loohcsmhtir')
    })
})