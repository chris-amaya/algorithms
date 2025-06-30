// ================================
// solution using frequency pattern


// export function areThereDuplicates(...args: number[] | string[]) {
//     // create our frequency counter
//     const frequency: Record<string, number> = {}

//     // loop through the args variable
//     for(let i = 0; i < args.length; i++) {
//         if(args[i] in frequency) {
//             return true
//         } else {
//             frequency[args[i]] = 1
//         }
//     }
//     return false
// }



// =================================
// solution using multiple pointers pattern

export function areThereDuplicates(...args: number[] | string[]) {
    args = args.sort()
    let pointer1 = 0;
    let pointer2 = pointer1 + 1;

    while(pointer1 < args.length - 1) {
        if(args[pointer1] === args[pointer2]) {
            return true;
        }

        pointer1++;
        pointer2++;
    }

    return false
}