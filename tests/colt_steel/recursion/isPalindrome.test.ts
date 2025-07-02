import { isPalindrome } from "@/colt_steel/recursion/isPalindrome"

describe('isPalindrome', () => {
    test('should tacocat return true', () => {
        expect(isPalindrome('tacocat')).toBe(true)
    })
    test('Should amanaplanacanalpanama return true', () => {
        expect(isPalindrome('amanaplanacanalpanama')).toBe(true)
    })
    test('Should amanaplanacanalpandemonium return false', () => {
        expect(isPalindrome('amanaplanacanalpandemonium')).toBe(false)
    })
    test('Should foobar return false', () => {
        expect(isPalindrome('foobar')).toBe(false)
    })

    test('Should a return true', () => {
        expect(isPalindrome('a')).toBe(true)
    })

    test('Should racecar return true', () => {
        expect(isPalindrome('racecar')).toBe(true)
    })
})