import { binarySearch } from "@/colt_steel/search_algorithms/binarySearch";

describe("binarySearch", () => {
  const sorted = [1, 3, 5, 7, 9, 11, 13, 15];

  test("should find value at beginning", () => {
    expect(binarySearch(sorted, 1)).toBe(0);
  });

  test("should find value in middle", () => {
    expect(binarySearch(sorted, 9)).toBe(4);
  });

  test("should find value at end", () => {
    expect(binarySearch(sorted, 15)).toBe(7);
  });

  test("should return -1 if value is not found", () => {
    expect(binarySearch(sorted, 8)).toBe(-1);
  });

  test("should return -1 for empty array", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  test("should work for single-element array", () => {
    expect(binarySearch([10], 10)).toBe(0);
    expect(binarySearch([10], 5)).toBe(-1);
  });

  test("should handle large arrays", () => {
    const big = Array.from({ length: 1000 }, (_, i) => i * 2); // [0, 2, 4, ...]
    expect(binarySearch(big, 998)).toBe(499);
    expect(binarySearch(big, 999)).toBe(-1);
  });
});
