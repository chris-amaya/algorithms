export function IPv4ToInt32(ip: string): number {
  const octets = ip.split('.').map(Number)
  const result =
    ((octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3]) >>> 0

  return result
}
