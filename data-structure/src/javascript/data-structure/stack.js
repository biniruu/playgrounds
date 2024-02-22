/* eslint-disable no-console */

class Stack {
  arr = []

  push(value) {
    return this.arr.push(value)
  }
  pop() {
    return this.arr.pop()
  }
  top() {
    return this.arr.at(-1)
  }
  get length() {
    return this.arr.length
  }
}

const stack = new Stack()

console.log(stack.push(1))
console.log(stack.push(3))
console.log(stack.push(5))
console.log(stack.push(2))
console.log(stack.push(4))
console.log(stack.length)
console.log(stack.pop())
console.log(stack.top())
