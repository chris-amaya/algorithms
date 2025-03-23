export const isPrime = (n: number):boolean => {
    for(let factor = 2; n > 1; factor++) {
        if(n === factor) return true
        const isDivisible = (n % factor === 0)
        if(isDivisible) return false;
    }
    return false
}

export const getPrimes = (start: number, finish: number) => {
    const primes: number[] = [];

    const lower = Math.min(start, finish)
    const upper = Math.max(start, finish)
    for(let factor = lower; factor <= upper; factor++) {
        if(isPrime(factor)) {
            primes.push(factor)
        }
    }
    return primes
}