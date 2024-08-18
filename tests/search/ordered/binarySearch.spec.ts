import { binarySearch } from 'src/search/ordered/binarySearch'

describe('Binary Search...', function () {
  it('should return correct number', function () {
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1)
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2)
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4)
    expect(
      binarySearch(
        [
          5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
          98, 99,
        ],
        10,
      ),
    ).toBe(2)
    expect(
      binarySearch(
        [
          5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
          98, 99,
        ],
        95,
      ),
    ).toBe(16)
  })

  it('returns -1 if no number is found', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1)
  })
})
