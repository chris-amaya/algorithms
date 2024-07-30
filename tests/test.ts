const primeFactor = (factor: number): string => {
  const primes: Record<string, number> = {}

  for (let n = 2; n <= factor; n++) {
    while (factor % n === 0) {
      primes[n] = primes[n] !== undefined ? primes[n] + 1 : 1

      factor /= n
    }
  }

  return Object.keys(primes)
    .map((prime) => {
      if (primes[prime] === 1) {
        return `(${prime})`
      }

      return `(${prime}**${primes[prime]})`
    })
    .join('')
}

export default primeFactor
