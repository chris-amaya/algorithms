// ==========================================
// Solution using while loop

export function countZeros(arr: number[]) {
    // set our first half portion, which is defined by arr.length / 2
    let half = Math.floor(arr.length / 2)
    // i think we need to use Math.round
    // a math function util to not let float numbers and only use int numbers
    while(half < arr.length && half > 0) {
        if(arr[half] > 0) {
            // go to the next half
            if(arr[half - 1] > 0 && arr[half] === 0) {
                return arr.length - half
            }

            half = Math.ceil((half + arr.length) / 2);
        } else {
            if(arr[half - 1] > 0 && arr[half] === 0) {
                return arr.length - half
            }
            // go to the previous half
            half = Math.floor(half / 2)
        }
    }

    return half === 0 ? arr.length : 0

    // loop through the arr, using while
    // we must detect where exactly the zeros start
    // from there we could actually return the product of arr.length - currentIndex position
}


// =============================================
// Solution using recursion