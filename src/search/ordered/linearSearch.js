function linearSearch(arr, val) {
  let i = 0

  while (i < arr.length) {
    if (val === arr[i]) {
      return i
    }

    i++
  }

  return -1
}

console.log(linearSearch([1, 10, 20, 15, 30], 15)) // 1
