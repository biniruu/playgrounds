/* eslint-disable no-console */

class Queue {
  arr = []

  enqueue(value) {
    return this.arr.push(value)
  }
  dequeue() {
    return this.arr.shift()
  }
  peek() {
    return this.arr.at(0)
  }
  get length() {
    return this.arr.length
  }
}

const queue = new Queue()

console.log(queue.enqueue(1))
console.log(queue.enqueue(3))
console.log(queue.enqueue(5))
console.log(queue.enqueue(2))
console.log(queue.enqueue(4))
console.log(queue.length)
console.log(queue.dequeue())
console.log(queue.peek())
