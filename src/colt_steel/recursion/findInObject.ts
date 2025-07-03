export function findInObject(obj: Record<any, any>, key: string): any {
    if(Object.keys(obj).length === 0) return undefined

    const firstKey = Object.keys(obj)[0]
    const rest = {...obj}
    delete rest[firstKey]

    const value = obj[firstKey]
    if(firstKey === key) {
        return value
    } else if(typeof value === 'object') {
        const nestedResult = findInObject(value, key)
        if(nestedResult !== undefined) return nestedResult
    }

    return findInObject(rest, key)
}