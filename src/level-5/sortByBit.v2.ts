export const sortByBit = (arr: number[]): number[] => {
    return arr.sort((a, b) => {
        const bitsA = a.toString(2).replace(/0/g, "").length
        const bitsB = b.toString(2).replace(/0/g, "").length

        if(bitsA === bitsB) {
            return a - b;
        }
        return bitsA - bitsB
    })
} 