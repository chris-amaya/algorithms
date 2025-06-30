export function isValidAnagram(str: string, str2: string) {
    // create a frequency counter, which will store how many appereances a char has in the str and str2
    const frequencyStr: Record<string, number> = {}
    const frequencyStr2: Record<string, number> = {}

    // loop through str1 and str2
    for(let value of str) {
        frequencyStr[value] = (frequencyStr[value] || 0) + 1
    }

    for(let value of str2) {
        frequencyStr2[value] = (frequencyStr2[value] || 0) + 1
    }

    // loop through the frequency counters and check if they have the same counts
    for(let key in frequencyStr) {
        const currentCounts = frequencyStr[key]
        if(currentCounts != frequencyStr2[key]) {
            return false
        }
    }

    return true
}