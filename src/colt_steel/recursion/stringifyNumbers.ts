export function stringifyNumbers(obj: Record<any, any>): any {
    if(Object.keys(obj).length === 0) return {}

    const first = Object.keys(obj)[0]
    const rest = {...obj}
    delete rest[first]

    let value = obj[first];
    let result:any = {}

    if(typeof value === 'number') {
        result[first] = value.toString()
    } else if(typeof value === 'object' && value !== null && !Array.isArray(value)) {
        result[first] = stringifyNumbers(value)
    } else {
        result[first] = value
    }

    return {
        ...result,
        ...stringifyNumbers(rest)
    }
}