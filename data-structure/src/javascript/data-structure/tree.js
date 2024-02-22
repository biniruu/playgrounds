/* eslint-disable no-console */

class Tree {
  constructor(value) {
    this.root = new Node(value)
  }
}

class Node {
  children = []
  constructor(value) {
    this.value = value
  }

  push(value) {
    this.children.push(new Node(value))
  }
}

const tree = new Tree('🍎')
tree.root.push('🍌')
tree.root.push('🍉')
console.log(tree.root)

tree.root.children[0].push('🍇')
tree.root.children[0].push('🍉')
console.log(tree.root.children[0])

tree.root.children[1].push('🍒')
tree.root.children[1].push('🫐')
console.log(tree.root.children[1])
