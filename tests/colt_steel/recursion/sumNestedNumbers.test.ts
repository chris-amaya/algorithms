import { sumNestedNumbers } from "@/colt_steel/recursion/sumNestedNumbers"

describe("sumNestedNumbers", () => {
  test("should sum flat array of numbers", () => {
    expect(sumNestedNumbers([1, 2, 3, 4])).toBe(10);
  });

  test("should sum nested array of numbers (1 level)", () => {
    expect(sumNestedNumbers([1, [2, 3], 4])).toBe(10);
  });

  test("should sum deeply nested arrays", () => {
    expect(sumNestedNumbers([1, [2, [3, 4], 5], 6])).toBe(21);
  });

  test("should return 0 for empty array", () => {
    expect(sumNestedNumbers([])).toBe(0);
  });

  test("should skip non-number values", () => {
    expect(sumNestedNumbers([1, "2", [3, null, [4, "hello"]], true])).toBe(8);
  });

  test("should handle arrays with only non-number values", () => {
    expect(sumNestedNumbers([null, undefined, "string", [], {}])).toBe(0);
  });
});
