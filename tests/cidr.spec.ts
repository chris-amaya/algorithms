import { calculateCidrNotation } from '../src/cidr'

describe('calculateCidrNotation...', function () {
  it('should return correct number', function () {
    expect(calculateCidrNotation('255.255.255.255')).toBe(32)
    expect(calculateCidrNotation('255.255.255.254')).toBe(31)
    expect(calculateCidrNotation('255.0.1.1')).toBe(8)
    expect(calculateCidrNotation('255.255.1.1')).toBe(16)
    expect(calculateCidrNotation('255.255.255.1')).toBe(24)
    expect(calculateCidrNotation('127.0.1.1')).toBe(0)
  })
})
