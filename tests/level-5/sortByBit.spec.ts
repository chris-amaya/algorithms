import { sortByBit } from 'src/level-5/sortByBit.v2'

describe('sortByBit', () => {
  it('should sort the array by the number of on bits', () => {
    const arr = [7, 6, 15, 8];
    sortByBit(arr);
    expect(arr).toEqual([8, 6, 7, 15]);
  });

  it('should handle an array with duplicate values', () => {
    const arr = [3, 8, 3, 6, 5, 7, 9, 1];
    sortByBit(arr);
    expect(arr).toEqual([1, 8, 3, 3, 5, 6, 9, 7]);
  });

  it('should handle an empty array', () => {
    const arr: number[] = [];
    sortByBit(arr);
    expect(arr).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const arr = [1];
    sortByBit(arr);
    expect(arr).toEqual([1]);
  });

  it('should handle an array with all elements having the same number of on bits', () => {
    const arr = [3, 5, 10, 12];
    sortByBit(arr);
    expect(arr).toEqual([3, 5, 10, 12]);
  });
});