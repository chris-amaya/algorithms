export function nestedEvenSum(obj: Record<any, any>): number {
    if(Object.keys(obj).length === 0) return 0;

    const firstKey = Object.keys(obj)[0]
    const rest = { ...obj }

    delete rest[firstKey]

    if(typeof obj[firstKey] === "number") {
        if(obj[firstKey] % 2 === 0) {
            return obj[firstKey] + nestedEvenSum(rest)
        }
    }

    // validate that it's a nested object and doesnt have values that we don't want
    if(typeof obj[firstKey] === 'object' && obj[firstKey] !== null && !Array.isArray(obj[firstKey])) {
        return nestedEvenSum({...obj[firstKey], ...rest})
    }
    
    return nestedEvenSum(rest)
}