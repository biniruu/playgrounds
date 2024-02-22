/* eslint-disable no-console */
class Node {
  next = null
  prev = null
  constructor(value) {
    this.value = value
  }
}

class DoubleLinkedList {
  head = null
  tail = null
  length = 0

  push(val) {
    const newNode = new Node(val)
    if (this.head) {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    } else {
      this.head = newNode
      this.tail = this.head
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) {
      return
    }
    const poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }
  shift() {
    if (!this.head) {
      return
    }
    const oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }
  unshift(val) {
    const newNode = new Node(val)
    if (this.head) {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    } else {
      this.head = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return null
    }
    const MIDDLE = Math.floor(this.length / 2)
    const lessThanHalf = idx <= MIDDLE
    let targetNode = lessThanHalf ? this.head : this.tail
    let count = lessThanHalf ? 0 : this.length - 1
    if (lessThanHalf) {
      while (count < idx) {
        targetNode = this.head.next
        count++
      }
    } else {
      while (count > idx) {
        targetNode = this.tail.prev
        count--
      }
    }
    return targetNode
  }
  set(idx, val) {
    const targetNode = this.get(idx)
    if (targetNode.value) {
      targetNode.value = val
      return true
    }
    return false
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) {
      return false
    }
    if (idx === 0) {
      return !!this.unshift(val)
    }
    if (idx === this.length) {
      return !!this.push(val)
    }
    const newNode = new Node(val)
    const prevNode = this.get(idx - 1)
    const nextNode = prevNode.next
    newNode.next = nextNode
    newNode.prev = prevNode
    nextNode.prev = newNode
    prevNode.next = newNode
    this.length++
    return true
  }
  remove(idx) {
    if (idx === 0) {
      return this.shift()
    }
    if (idx === this.length - 1) {
      return this.pop()
    }
    const targetNode = this.get(idx)
    if (!targetNode) {
      return targetNode
    }
    const prevNode = targetNode.prev
    const nextNode = targetNode.next
    prevNode.next = nextNode
    nextNode.prev = prevNode
    targetNode.next = null
    targetNode.prev = null
    this.length--
    return targetNode
  }
}

const doubleLinkedList = new DoubleLinkedList()

console.log(doubleLinkedList.push('🍎'))
console.log(doubleLinkedList.push('🍌'))
console.log(doubleLinkedList.push('🍓'))
console.log(doubleLinkedList.pop())
console.log(doubleLinkedList)
console.log(doubleLinkedList.shift())
console.log(doubleLinkedList)
console.log(doubleLinkedList)
console.log(doubleLinkedList.unshift('🍧'))
console.log(doubleLinkedList.unshift('🍭'))
console.log(doubleLinkedList.pop())
console.log(doubleLinkedList)
console.log(doubleLinkedList.push('🍇'))
console.log(doubleLinkedList.push('🍕'))
console.log(doubleLinkedList.push('🍔'))
console.log(doubleLinkedList.get(0))
console.log(doubleLinkedList.get(3))
console.log(doubleLinkedList.get(4))
console.log(doubleLinkedList.set(4, '🍯'))
console.log(doubleLinkedList.get(4))
console.log(doubleLinkedList.insert(2, '🍡'))
console.log(doubleLinkedList)
