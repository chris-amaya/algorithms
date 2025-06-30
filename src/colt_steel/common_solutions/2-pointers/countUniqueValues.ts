export function countUniqueValues(arr: number[]) {
    // set our index pointer and lead/finder pointer    
    let index = 0;
    let lead = index + 1;

    // loop the arr itself
    while(lead < arr.length) {
        // if we detect the current comparisson is different (unique), 
        if(arr[index] !== arr[lead]) {
            // then we increase our index pointer 
            index++;

            // replace the value and save it in the current index value
            arr[index] = arr[lead]
        } 
    
        lead++
    }

    // check where the index position is, and then remove the elements that should not exist in the array
    const newArr = arr.slice(0, index + 1)
    
    // return the array length
    return newArr.length

    
}