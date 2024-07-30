export const isLeapYear = (year: number): boolean => {
  const is365 = year % 4 === 0
  const isCenturyDivisable = year % 100 === 0
  const isLeapDivisable = year % 400 === 0
  let isLeapYear = false

  if (year < 0) return false

  if (is365 && !isCenturyDivisable) {
    return true
  }

  if (is365) {
    isLeapYear = true

    if (isCenturyDivisable) {
      if (!isLeapDivisable) {
        isLeapYear = false
      }

      if (isLeapDivisable) {
        isLeapYear = true
      }
    }

    if (!isCenturyDivisable) {
      if (isLeapDivisable) {
        isLeapYear = true
      }

      if (!isLeapDivisable) {
        isLeapYear = false
      }
    }
  }
  return isLeapYear
}
