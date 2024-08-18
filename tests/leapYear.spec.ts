import { isLeapYear } from 'src/isLeapYear'

describe('Leap Year Calculation Tests', () => {
  test('Year divisible by 4 but not by 100 is a leap year', () => {
    expect(isLeapYear(2024)).toBe(true)
  })

  test('Year divisible by 100 but not by 400 is not a leap year', () => {
    expect(isLeapYear(1900)).toBe(false)
  })

  test('Year divisible by 400 is a leap year', () => {
    expect(isLeapYear(2000)).toBe(true)
  })

  test('Year not divisible by 4 is not a leap year', () => {
    expect(isLeapYear(2019)).toBe(false)
  })

  test('Year divisible by 4 and 100 and 400 is a leap year', () => {
    expect(isLeapYear(2400)).toBe(true)
  })

  test('Negative year divisible by 4 is not a leap year (historical context, not standard)', () => {
    expect(isLeapYear(-8)).toBe(false) // Historically, there were no leap years before introduction of the Gregorian calendar.
  })

  test('Typical non-leap year', () => {
    expect(isLeapYear(2021)).toBe(false)
  })
})
