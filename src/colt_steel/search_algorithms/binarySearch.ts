export function binarySearch(arr: number[], element: number) {
    let left = 0
    let right = arr.length

    while(left <= right) {
        const middle = Math.floor((left + right) / 2)
        if(arr[middle] === element) return middle

        if(element > arr[middle]) {
            left = middle + 1; 
        } else {
            right = middle - 1
        }
    }

    return -1
}