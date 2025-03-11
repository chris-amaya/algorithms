// https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript

export {};

declare global {
    interface Array<T> {
        square(): number[];
        cube(): number[];
        average(): number;
        sum(): number;
        even(): number[];
        odd(): number[];
    }
}

Array.prototype.square = function(): number[] {
    return this.map(value => value * value)    
}

Array.prototype.cube = function(): number[] {
    return this.map(value => value ** 3)
}

Array.prototype.average = function(): number {
    const length = this.length;
    
    // const sum = this.reduce((prev, curr) => prev + curr, 0)
    const sum = this.sum()

    return sum / length
}

Array.prototype.sum = function(): number {
    return this.reduce((prev, curr) => prev + curr, 0)
}

Array.prototype.even = function(): number[] {
    return this.filter(value => value % 2 === 0)
}

Array.prototype.odd = function(): number[] {
    return this.filter(value => value % 2 !== 0)
}

