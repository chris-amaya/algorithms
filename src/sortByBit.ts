export function sortByBit(arr: number[] | string[]): number[] | string[] {
  arr.sort((a, b) => {
    const bitsA = a
      .toString(2)
      .padStart(8, '0')
      .split('')
      .reduce((prev, curr, index) => {
        if (curr === '1') return prev + 1

        return prev
      }, 0)

    const bitsB = b
      .toString(2)
      .padStart(8, '0')
      .split('')
      .reduce((prev, curr, index) => {
        if (curr === '1') return prev + 1

        return prev
      }, 0)

    if (bitsA === bitsB) {
      return (a as number) - (b as number)
    }

    return bitsA - bitsB
  })

  return arr
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]))
