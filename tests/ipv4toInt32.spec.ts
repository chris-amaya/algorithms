import { IPv4ToInt32 } from '../src/ipv4toInt32'

describe('ipV4ToInt32...', function () {
  it('should return correct number', function () {
    expect(IPv4ToInt32('127.0.0.1')).toBe(2130706433)
    expect(IPv4ToInt32('10.10.10.10')).toBe(168430090)
  })
})
