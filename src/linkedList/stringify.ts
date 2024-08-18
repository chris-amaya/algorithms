import { LinkedList, type Node } from '@/linkedList/linkedList'

class MyLinkedList extends LinkedList<string> {
  printToArrow(list: Node<number> | null): string {
    if (list === null) {
      return 'null'
    }

    let current = list
    let str = ''
    if (current != null) {
      while (current.next !== null) {
        str += `${current.data} -> `
        current = current.next
      }
    }

    str += `${current.data} -> null`

    return str
  }
}

export function stringify(list: Node<number> | null): string {
  return new MyLinkedList().printToArrow(list)
}
