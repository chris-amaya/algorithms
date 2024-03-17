import { sortByBit } from '../src/sortByBit'

describe('SortByBit...', function () {
  it('should sort correctly', function () {
    const a = [3, 8, 3, 6, 5, 7, 9, 1]
    sortByBit(a)
    expect(a).toEqual([1, 8, 3, 3, 5, 6, 9, 7])

    const b = [9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0]
    sortByBit(b)
    expect(b).toEqual([0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56])
  })
})
