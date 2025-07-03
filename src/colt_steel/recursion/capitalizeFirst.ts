export function capitilizeFirst(arr: string[]): string[] {
    if(arr.length === 0) return []

    const first = arr[0]

    const capitalizedWord = first[0].toUpperCase() + first.slice(1)

    return [capitalizedWord].concat(capitilizeFirst(arr.slice(1)))
}