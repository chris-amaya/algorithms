export function some(arr1: number[], arr2: number[]) {
    if(arr1.length !== arr2.length) {
        return false
    }

    const frequencies1: Record<number, number> = {};
    const frequencies2: Record<number, number> = {};

    // Initialize the objects to 0
    for(let key of arr1) {
        frequencies1[key] = (frequencies1[key] || 0) + 1
    }

    for(let key of arr2) {
        frequencies2[key] = (frequencies2[key] || 0) + 1
    }

    for(const value in frequencies1) {
        const valueExponential = Number(value) ** 2;
        
        // value has the correct exponential in the 2nd array
        if(!(valueExponential in frequencies2)) {
            return false
        }

        // check if its the correct frequency found on 2nd array
        if(frequencies1[value] !== frequencies2[valueExponential]) {
            return false
        }


    }

    return true
    
} 