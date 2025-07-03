type NestedArray<T> = T | NestedArray<T>[];
type Config = {
  limit: number
}

export function collectMatching(
  arr: NestedArray<any>[],
  callback: (val: number) => boolean,
  config?: Config
): number[] {
    if(arr.length === 0) return []


    const first = arr[0]
    const rest = arr.slice(1)

    if(Array.isArray(first)) {
      return collectMatching([...first, ...rest], callback, config)
    }

    if(typeof first === "number") {
      if(callback(first)) {
        return [first].concat(collectMatching(rest, callback, config))
      }
    }

    return [].concat(collectMatching(rest, callback, config) as any)
}