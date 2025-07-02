export function someRecursive(arr: number[], callback: (...rest: any) => {}): boolean {
    if(arr.length === 0) return false 

    // if(callback(arr[0])) {
    //     return true
    // } else {
    //     return someRecursive(arr.splice(1), callback)
    // }

    return !callback(arr[0]) ? someRecursive(arr.splice(1), callback) : true 
}