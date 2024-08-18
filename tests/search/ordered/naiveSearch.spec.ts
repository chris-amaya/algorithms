import { naiveSearch } from 'src/search/strings/naiveSearch'

describe('Binary Search...', function () {
  it('should return correct number', function () {
    expect(naiveSearch('woodwodwoo', 'woo')).toBe(2)
    // expect(naiveSearch([1, 2, 3, 4, 5], 3)).toBe(2)
  })
})
