export function linearSearch(arr: number[], element: number) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === element) return i
    }

    return - 1
}