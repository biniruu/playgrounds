/* eslint-disable no-console, no-inner-declarations */

/* return the nth number from the fibonacci numbers */
// using iterator
{
  function getNthFibo(n) {
    if (n <= 1) {
      return n
    }
    let sum = 0
    let firstIdx = 0
    let secondIdx = 1
    for (let i = 1; i < n; i++) {
      sum = firstIdx + secondIdx
      firstIdx = secondIdx
      secondIdx = sum
    }
    return sum
  }
  console.log(getNthFibo(6))
}

// using recursion
{
  function getNthFibo(n) {
    if (n <= 1) {
      return n
    }
    return getNthFibo(n - 1) + getNthFibo(n - 2)
  }
  console.log(getNthFibo(6))
}

// using tail recursion
{
  function getNthFiboBetter(n, firstIdx, secondIdx) {
    if (n === 0) {
      return firstIdx
    }
    if (n === 1) {
      return secondIdx
    }
    return getNthFiboBetter(n - 1, secondIdx, firstIdx + secondIdx)
  }
  console.log(getNthFiboBetter(6, 0, 1))
}
