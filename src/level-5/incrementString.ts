// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

export const incrementString = (str: string) => {
    let numbersInStr = 0;
    let numbers:number[] = []
    for(let i = 0; i < str.length; i++) {
        const char = Number(str[i])
        if(!Number.isNaN(char)) {
            numbersInStr++
            numbers.push(char)
        }

        if(Number.isNaN(char)) {
            numbersInStr = 0
            numbers = []
        }
    }

    let digits = Number(numbers.join('')) || 0
    digits++

    const prefix = str.slice(0, str.length - numbers.length);
    return prefix + digits
    .toString()
    .padStart(numbers.length, '0');
}