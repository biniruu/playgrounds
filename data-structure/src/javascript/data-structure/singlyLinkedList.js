/* eslint-disable no-console */

class Node {
  next = null
  constructor(value) {
    this.value = value
  }
}

class SinglyLinkedList {
  head = null
  tail = null
  length = 0

  push(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) {
      return
    }
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift() {
    if (!this.head) {
      return
    }
    const firstIdx = this.head
    this.head = firstIdx.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return firstIdx
  }
  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(idx) {
    const outOfRange = idx >= this.length || idx < 0
    if (!this.head || outOfRange) {
      return
    }
    let counter = 0
    let current = this.head
    while (counter < idx) {
      current = current.next
      counter++
    }
    return current
  }
  set(idx, val) {
    if (idx === undefined || !val) {
      console.log('👀')
      return false
    }
    if (!this.head) {
      return false
    }
    const pickedHead = this.get(idx)
    if (pickedHead) {
      pickedHead.value = val
      return true
    }
    return false
  }
  insert(idx, val) {
    if (idx === undefined || !val) {
      console.log('👀')
      return false
    }
    const outOfRange = idx > this.length || idx < 0
    if (!this.head || outOfRange) {
      return false
    }
    if (idx === 0) {
      this.unshift(val)
      return true
    }
    if (idx === this.length) {
      this.push(val)
      return true
    }
    const newNode = new Node(val)
    const prevHead = this.get(idx - 1)
    if (prevHead) {
      newNode.next = prevHead.next
      prevHead.next = newNode
      this.length++
      return true
    }
    return false
  }
  remove(idx) {
    if (idx === undefined) {
      console.log('👀')
      return
    }
    const outOfRange = idx >= this.length || idx < 0
    if (!this.head || outOfRange) {
      return
    }
    if (idx === 0) {
      this.shift()
      this.length--
      return true
    }
    if (idx === this.length - 1) {
      this.pop()
      this.length--
      return true
    }
    const prevNode = this.get(idx - 1)
    if (prevNode) {
      const targetNode = prevNode.next
      prevNode.next = targetNode.next
      this.length--
      return true
    }
    return false
  }
  reverse() {
    if (!this.head) {
      return false
    }
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
}

const list = new SinglyLinkedList()
console.log(list.push('🍧'))
// console.log(list.head.next)
// console.log(list.tail.next)
console.log(list.push('🍭'))
// console.log(list.head.next)
// console.log(list.tail.next)
console.log(list.push('🍎'))
// console.log(list.head.next)
// console.log(list.tail.next)
// console.log(list.pop())
// console.log(list.head.next)
// console.log(list.tail.next)
// console.log(list)
// console.log(list.shift())
// console.log(list)
// console.log(list.head)
// console.log(list.head.next)
// console.log(list.tail.next)
// console.log(list.unshift('🐟'))
// console.log(list.head.next)
// console.log(list.tail.next)
// console.log(list.insert(2, '🍓'))
// console.log(list)
// console.log(list.pop())
// console.log(list)
// console.log(list.pop())
// console.log(list)
// console.log(list.push('🔥'))
// console.log(list.head.next)
// console.log(list.tail.next)
// console.log(list.get(1))
// console.log(list.set(0, '🍌'))
// console.log(list)
// console.log(list.set(100, '🍌'))
// console.log(list)
console.log(list.reverse())
// console.log(list)
