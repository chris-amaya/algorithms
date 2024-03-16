function padding(date: number): string {
  return date.toString().padStart(2, '0')
}

export function humanReadable(seconds: number): string {
  if (seconds >= 359999) {
    throw new Error('Input exceeds maximum time limit')
  }

  const hours = Math.floor(seconds / 3600)
  seconds %= 3600

  const minutes = Math.floor(seconds / 60)

  seconds %= 60

  return `${padding(hours)}:${padding(minutes)}:${padding(seconds)}`
}
