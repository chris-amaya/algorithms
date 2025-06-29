import { isValidAnagram } from "@/colt_steel/common_solutions/anagram"


describe("Anagram", () => {
    test("Should return true if empty string", () => {
        expect(isValidAnagram("", "")).toBe(true)
    })

    test("Should return false if wrong anagram", () => {
        expect(isValidAnagram("aaz", 'zza')).toBe(false)
        expect(isValidAnagram("rat", "car")).toBe(false)
    })

    test("Should return true if correct anagram", () => {
        expect(isValidAnagram("anagram", "nagaram")).toBe(true)
        expect(isValidAnagram("qwerty", "qeywrt")).toBe(true)
    })
})