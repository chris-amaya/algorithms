export class LinkedList<T> {
  head: Node<T> | null

  constructor() {
    this.head = null
  }

  append(data: T): void {
    if (this.head === null) {
      this.head = {
        data,
        next: null,
      }
    } else {
      let current = this.head
      while (current?.next != null) {
        current = current.next
      }

      current.next = {
        data,
        next: null,
      }
    }
  }

  print(): string {
    let current = this.head
    let string = ''
    while (current?.next != null) {
      string += current.data + ', '
      current = current.next
    }

    string += current?.data

    return string
  }
}

export class Node<T> {
  data: T
  next: Node<T> | null

  constructor(data: T) {
    this.data = data
    this.next = null
  }
}
