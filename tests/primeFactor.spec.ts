import { primeFactor } from 'src/primeFactor'

describe('primeFactor', () => {
  it('Basic Test', () => {
    expect(primeFactor(86240)).toBe('(2**5)(5)(7**2)(11)')
  })
})
