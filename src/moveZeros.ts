// https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript

export const moveZeros = (arr: any[]): number[] => {
    const newArr:number[] = []
    return [
        ...arr.filter(value => value === 0 ? newArr.push(value) && false : true),
        ...newArr
    ]
};