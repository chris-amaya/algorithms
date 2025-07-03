import { findInObject } from "@/colt_steel/recursion/findInObject"

describe('findInObject', () => {
  const testObj = {
    name: "John",
    details: {
      age: 30,
      contact: {
        email: "john@example.com",
        phone: "123456"
      },
      preferences: {
        color: "blue",
        hobbies: {
          outdoor: "hiking",
          indoor: "chess"
        }
      }
    },
    active: true
  };

  test('should find a top-level key', () => {
    expect(findInObject(testObj, "name")).toBe("John");
  });

  test('should find a nested key (1 level deep)', () => {
    expect(findInObject(testObj, "age")).toBe(30);
  });

  test('should find a deeply nested key (2+ levels deep)', () => {
    expect(findInObject(testObj, "phone")).toBe("123456");
    expect(findInObject(testObj, "indoor")).toBe("chess");
  });

  test('should return undefined if key is not found', () => {
    expect(findInObject(testObj, "nonExistentKey")).toBe(undefined);
  });

  test('should work with boolean values', () => {
    expect(findInObject(testObj, "active")).toBe(true);
  });
});
