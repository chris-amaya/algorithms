import { LinkedList } from 'src/linkedList/linkedList'

describe('linked List', () => {
  it('should initialize with a head of null', () => {
    const task = new LinkedList()
    expect(task).toEqual({ head: null })
  })
  it('should append a new node', () => {
    const task = new LinkedList<string>()
    task.append('task 1')
    expect(task).toEqual({
      head: {
        data: 'task 1',
        next: null,
      },
    })
  })

  it('should append a new node to the end of the list', () => {
    const task = new LinkedList<string>()
    task.append('task 1')
    task.append('task 2')
    task.append('task 3')
    expect(task).toEqual({
      head: {
        data: 'task 1',
        next: {
          data: 'task 2',
          next: {
            data: 'task 3',
            next: null,
          },
        },
      },
    })
  })

  it('should print the list', () => {
    const task = new LinkedList<string>()
    task.append('task 1')
    task.append('task 2')
    const print = task.print()
    expect(print).toBe('task 1, task 2')
  })
})
