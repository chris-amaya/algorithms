import { removeEmptyValues } from "@/colt_steel/recursion/removeEmtpyValues"

describe("removeEmptyValues", () => {
  test("should remove top-level empty values", () => {
    const input = {
      name: "John",
      age: 30,
      email: "",
      isActive: true,
      notes: null
    };
    const expected = {
      name: "John",
      age: 30,
      isActive: true
    };
    expect(removeEmptyValues(input)).toStrictEqual(expected);
  });

  test("should remove nested empty values", () => {
    const input = {
      user: {
        name: "",
        profile: {
          bio: "",
          avatar: "pic.png"
        },
        preferences: {
          theme: null
        }
      }
    };
    const expected = {
      user: {
        profile: {
          avatar: "pic.png"
        }
      }
    };
    const result = removeEmptyValues(input)
    
    expect(result).toStrictEqual(expected);
  });

  test("should handle empty input object", () => {
    expect(removeEmptyValues({})).toStrictEqual({});
  });

  test("should preserve arrays and booleans", () => {
    const input = {
      tags: [],
      active: false,
      description: ""
    };
    const expected = {
      tags: [],
      active: false
    };
    expect(removeEmptyValues(input)).toStrictEqual(expected);
  });

  test("should remove keys with undefined values", () => {
    const input = {
      name: "Chris",
      hobby: undefined,
      data: {
        value: undefined,
        valid: true
      }
    };
    const expected = {
      name: "Chris",
      data: {
        valid: true
      }
    };
    expect(removeEmptyValues(input)).toStrictEqual(expected);
  });
});
