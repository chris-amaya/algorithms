export function rgb(red: number, green: number, blue: number): string {
  const [redHex, greenHex, blueHex] = [red, green, blue]
    .map((value) => Math.min(255, Math.max(0, value)).toString(16))
    .map((value) => {
      return value.padStart(2, '0').toUpperCase()
    })

  return redHex + greenHex + blueHex
}
