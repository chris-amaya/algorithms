  type NestedArray<T> = T | NestedArray<T>[];

  export function collectMatching(
    arr: NestedArray<number>[],
    callback: (val: number) => boolean
  ): number[] {
      if(arr.length === 0) return []

      const first = arr[0]
      const rest = arr.slice(1)

      if(Array.isArray(first)) {
        return collectMatching([...first, ...rest], callback)
      }

      if(typeof first === "number") {
        if(callback(first)) {
          return [first].concat(collectMatching(rest, callback))
        }
      }

      return [].concat(collectMatching(rest, callback) as any)
  }