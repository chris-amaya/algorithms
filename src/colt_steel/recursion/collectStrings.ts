export function collectStrings(obj: Record<any, any>): any {
    if(Object.keys(obj).length === 0) return []

    const firstKey = Object.keys(obj)[0]
    const rest = {...obj}
    delete rest[firstKey]

    const value = obj[firstKey]

    if(typeof value === 'string') {
        return [value].concat(collectStrings(rest))

    } else if(typeof value === 'object') {
        return collectStrings({
            ...value,
            ...rest
        })
    }

    return [value].concat(collectStrings(rest))
}