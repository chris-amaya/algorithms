export function removeEmptyValues(input: Record<any, any>): any {
    if(Object.keys(input).length === 0) return {}

    const firstKey = Object.keys(input)[0]
    const rest = {...input}

    delete rest[firstKey]

    let result: Record<any, any> = {}

    const cleanedRest = removeEmptyValues(rest)

    const value = input[firstKey]
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        const resultNested = removeEmptyValues(value)
        if(Object.keys(resultNested).length > 0) {
            result[firstKey] = resultNested
        }
    } else if(value !== null && value !== '' && value !== undefined) {
        result[firstKey] = value
    }

    return {
        ...result,
        ...cleanedRest
    }
}