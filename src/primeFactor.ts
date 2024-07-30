export const primeFactor = (n: number): string => {
  const primes: Record<string, number> = {}

  for (let factor = 2; n > 1; factor++) {
    while (n % factor === 0) {
      primes[factor] = primes[factor] === undefined ? 1 : primes[factor] + 1
      n /= factor
    }
  }

  return Object.keys(primes)
    .map((key) => {
      if (primes[key] === 1) {
        return `(${key})`
      } else return `(${key}**${primes[key]})`
    })
    .join('')
}
