/* eslint-disable no-console */
class BinarySearchTree {
  root = null
  length = 0
  #insert(node, value) {
    if (node.value > value) {
      if (node.left) {
        this.#insert(node.left, value)
      } else {
        node.left = new Node(value)
        this.length++
      }
    } else if (node.value < value) {
      if (node.right) {
        this.#insert(node.right, value)
      } else {
        node.right = new Node(value)
        this.length++
      }
    } else {
      console.log(`${value} already added`)
    }
  }
  insert(value) {
    if (this.root) {
      this.#insert(this.root, value)
    } else {
      this.root = new Node(value)
    }

    return this.length
  }
  #search(node, value) {
    if (node.value > value) {
      if (!node.left) {
        return null
      }

      if (node.left.value === value) {
        return node.left
      }

      return this.#search(node.left, value)
    }

    if (!node.right) {
      return null
    }

    if (node.right.value === value) {
      return node.right
    }

    return this.#search(node.right, value)
  }
  search(value) {
    if (!this.root) {
      return null
    }

    if (this.root.value === value) {
      return this.root
    }

    return this.#search(this.root, value)
  }
  #remove(node, value) {
    if (!node) {
      return null
    }

    if (node.value === value) {
      if (!node.left && !node.right) {
        this.length--

        return null
      }

      if (!node.left) {
        return node.right
      }

      if (!node.right) {
        return node.left
      }

      let exchange = node.left
      while (exchange.right) {
        exchange = exchange.right
      }

      const temp = node.value
      node.value = exchange.value
      exchange.value = temp
      node.left = this.#remove(node.left, exchange.value)

      return node
    }

    // 부모 입장
    if (node.value > value) {
      node.left = this.#remove(node.left, value)

      return node
    }

    node.right = this.#remove(node.right, value)

    return node
  }
  remove(value) {
    // 1. doesn't have any child nodes: remove the current node
    // 2. has a right child node: swap the current node with the right child node
    // 3. has a left child node: swap the current node with the left child node
    // 4. has both: swap the current node for the largest child node of the left child nodes and then remove the last leaf
    const previousLength = this.length
    this.root = this.#remove(this.root, value)

    // when the root is null
    if (!this.root) {
      return false
    }

    // when the value is out of nodes
    if (previousLength === this.length) {
      return false
    }

    return this.length
  }
}

class Node {
  left = null
  right = null

  constructor(value) {
    this.value = value
  }
}

const bst = new BinarySearchTree()
console.log(bst.remove(8))
bst.insert(8)
bst.insert(10)
bst.insert(3)
bst.insert(1)
bst.insert(14)
bst.insert(6)
bst.insert(7)
bst.insert(4)
console.log(bst.insert(13))
console.log(bst)

console.log(bst.search(7))
console.log(bst.search(5))

console.log(bst.remove(8))
console.log(bst.remove(15))
console.log(bst.search(8))
