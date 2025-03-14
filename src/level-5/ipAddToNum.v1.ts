import { IPv4ToInt32 } from '@/ipv4toInt32'

export function ipToNum(ip: string): number {
  return (
    ip
      .split('.')
      .reduce((prev, current) => (prev << 8) + Number(current), 0) >>> 0
  )
}

export function numToIp(x: number): string {
  return [
    (x >>> 24) & 0xff,
    (x >>> 16) & 0xff,
    (x >>> 8) & 0xff,
    x & 0xff,
  ].join('.')
}

console.log(ipToNum('192.168.1.1'))
console.log(IPv4ToInt32('192.168.1.1'))

console.log(numToIp(2130706433))
