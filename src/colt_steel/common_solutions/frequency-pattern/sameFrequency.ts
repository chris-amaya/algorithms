export function sameFrequency(num1: number, num2: number) {
    const number1 = num1.toString()
    const number2 = num2.toString()

    const frequency1: Record<string, number> = {}
    const frequency2: Record<string, number> = {}

    for(let value of number1) {
        frequency1[value] = (frequency1[value] || 0) + 1
    }

    for(let value of number2) {
        frequency2[value] = (frequency2[value] || 0) + 1
    }

    for(let key in frequency1) {
        if(frequency1[key] !== frequency2[key]) return false
    }

    return true
}