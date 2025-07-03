export function flatten(arr: any[]): any {
    if(arr.length === 0) return []

    const first = arr[0]
    const rest = arr.slice(1)

    if(Array.isArray(first)) {
        return flatten([...first, ...rest])
    }

    return [first].concat(flatten(rest))
}