export function sumNestedNumbers(nums: any[]): number {
    if(nums.length === 0) return 0

    const first = nums[0]
    const rest = nums.slice(1)

    if(Array.isArray(first)) {
        const nestedSum = sumNestedNumbers(first)
        return nestedSum + sumNestedNumbers(rest)
    } else if(typeof first === 'number') {
        return first + sumNestedNumbers(rest)
    }

    return sumNestedNumbers(rest)
}