/***
 * the Cidr notation is, the numbers that represent the possible hosts can be used in a mask
 * e.g. 127.0.0.1/24, 127.0.0.254/2
 * the number 24 or 2 would be the Cidr
 */
export function calculateCidrNotation(mask: string): number {
  const maskArr = mask.split('.').map(Number)

  // Convert the octets into a single 32-bit number
  let maskInt = maskArr.reduce((acc, octet) => (acc << 8) | octet, 0)

  // Invert the mask to count zeros instead of ones
  maskInt = ~maskInt

  // Use Math.clz32() to count the leading zeros in the inverted mask
  // The CIDR notation is then 32 - the number of leading zeros, because we're interested
  // in the number of bits set to 1 in the original mask
  return Math.clz32(maskInt)
}

// Example usage
// console.log(calculateCidrNotation('255.255.255.255')) // Expected output: 32
