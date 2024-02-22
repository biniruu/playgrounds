/* eslint-disable no-console */

class LinkedList {
  length = 0
  head = null
  tail = null

  add(value) {
    if (this.head) {
      let current = this.head

      while (current.next) {
        current = current.next
      }

      current.next = new Node(value)
      this.tail = current.next
    } else {
      this.head = new Node(value)
    }

    this.length++

    return this.length
  }

  append(value) {
    const node = new Node(value)

    if (this.head) {
      this.tail.next = node
      this.tail = node
    } else {
      this.add(value)
    }

    this.length++

    return this.length
  }

  search(index) {
    return this.#search(index).current?.value
  }

  #search(index) {
    let count = 0
    let prev
    let current = this.head

    while (count < index) {
      prev = current
      current = current?.next
      count++
    }

    return { prev, current }
  }

  remove(index) {
    const { prev, current } = this.#search(index)

    if (prev && current) {
      prev.next = current.next
      this.length--

      return this.length
    }

    if (current) {
      this.head = current.next
      this.length--

      return this.length
    }
  }
}

class Node {
  next = null

  constructor(value) {
    this.value = value
  }
}

const ll = new LinkedList()

console.log(ll.length)

console.log(ll.add('🍎'))
console.log(ll.add('🍌'))
console.log(ll.add('🍉'))

console.log(ll.search(0))
console.log(ll.append('🍇'))
console.log(ll.search(3))
console.log(ll.append('🍓'))
console.log(ll.search(4))
console.log(ll.append('🍒'))
console.log(ll.search(5))
