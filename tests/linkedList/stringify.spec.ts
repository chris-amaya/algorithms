import { Node } from '../../src/linkedList/linkedList'
import { stringify } from '../../src/linkedList/stringify'

describe('Stringify', () => {
  it('should return "null" for an empty linked list', () => {
    expect(stringify(null)).toBe('null')
  })

  it('should correctly convert a larger linked list to string', () => {
    const list = new Node(
      0,
      new Node(1, new Node(4, new Node(9, new Node(16)))),
    )
    expect(stringify(list)).toBe('0 -> 1 -> 4 -> 9 -> 16 -> null')
  })

  it('should handle a linked list with only one node with a large value', () => {
    const list = new Node(9999)
    expect(stringify(list)).toBe('9999 -> null')
  })

  it('should correctly handle a linked list where all nodes have the same value', () => {
    const list = new Node(7, new Node(7, new Node(7)))
    expect(stringify(list)).toBe('7 -> 7 -> 7 -> null')
  })
})
