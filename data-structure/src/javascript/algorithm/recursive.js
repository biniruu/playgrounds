/* eslint-disable no-console, no-inner-declarations */

/* 재귀 문제 집합 : fib */
// their answer
{
  function fib(n) {
    if (n <= 2) return 1
    return fib(n - 1) + fib(n - 2)
  }
  console.log(fib(4))
  console.log(fib(10))
  console.log(fib(28))
  console.log(fib(35))
}

// my answer
{
  function fib(idx) {
    if (idx <= 1) {
      return 1
    }

    let sum = 1
    const calcSum = num => {
      if (idx <= 2) {
        sum = num
        return
      }
      idx--
      const value = sum + num
      sum = num
      calcSum(value)
    }
    calcSum(1)

    return sum
  }
  console.log(fib(4))
  console.log(fib(10))
  console.log(fib(28))
  console.log(fib(35))
}

/* 재귀 문제 집합 : recursiveRange */
// their answer
{
  function recursiveRange(x) {
    if (x === 0) return 0
    return x + recursiveRange(x - 1)
  }
  console.log(recursiveRange(6))
  console.log(recursiveRange(10))
}

// my answer
{
  function recursiveRange(num) {
    if (num <= 0) {
      return 0
    }

    const result = num + recursiveRange(num - 1)
    return result
  }
  console.log(recursiveRange(6))
  console.log(recursiveRange(10))
}

/* 재귀 문제 집합 : productOfArray */
// their answer
{
  function productOfArray(arr) {
    if (arr.length === 0) {
      return 1
    }
    return arr[0] * productOfArray(arr.slice(1))
  }
  console.log(productOfArray([1, 2, 3]))
  console.log(productOfArray([1, 2, 3, 10]))
}

// my answer
{
  function productOfArray(arr) {
    if (!arr.length) {
      return null
    }

    const firstIdx = arr[0]

    if (arr.length === 1) {
      return firstIdx
    }

    const result = firstIdx * productOfArray(arr.splice(1))
    return result
  }
  console.log(productOfArray([1, 2, 3]))
  console.log(productOfArray([1, 2, 3, 10]))
}

/* 재귀 문제 집합 : factorial */
// their answer
{
  function factorial(x) {
    if (x < 0) return 0
    if (x <= 1) return 1
    return x * factorial(x - 1)
  }
  console.log(factorial(1))
  console.log(factorial(2))
  console.log(factorial(4))
  console.log(factorial(7))
}

// my answer
{
  function factorial(num) {
    if (num <= 1) {
      return 1
    }

    const result = num * factorial(num - 1)
    return result
  }
  console.log(factorial(1))
  console.log(factorial(2))
  console.log(factorial(4))
  console.log(factorial(7))
}

/* 재귀 문제 집합 : power */
// their answer
{
  function power(base, exponent) {
    if (exponent === 0) return 1
    return base * power(base, exponent - 1)
  }
  console.log(power(2, 0))
  console.log(power(2, 2))
  console.log(power(2, 4))
}

// my answer
{
  function power(num, pow) {
    if (pow === 0) {
      return 1
    }

    if (pow === 1) {
      return num
    }

    let result = 0
    result = num * power(num, pow - 1)

    return result
  }
  console.log(power(2, 0))
  console.log(power(2, 2))
  console.log(power(2, 4))
}
