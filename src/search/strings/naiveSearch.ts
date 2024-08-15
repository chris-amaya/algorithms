export function naiveSearch(str: string, pattern: string): number {
  let timesCount = 0
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === pattern[0]) {
      let patternCount = 0
      for (let j = 0; j <= pattern.length; j++) {
        if (patternCount === pattern.length) {
          timesCount++
          break
        }
        const char1 = str[i + j]
        const char2 = pattern[j]
        if (char1 === char2) patternCount++
      }
    }
  }

  return timesCount
}

// export function naiveSearch(str: string, pattern: string): number {
//   let i = 0
//   let substring = ''
//   while (i <= str.length) {
//     const char1 = str[i]
//     const char2 = pattern[0]

//     if (char1 === char2) {
//       let j = 0
//       while (j < pattern.length) {
//         substring[j] = j
//       }
//     }
//   }
// }
