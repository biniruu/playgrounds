/* eslint-disable no-console, no-inner-declarations */

/* 도전 과제 - 코딩 연습 6: Multiple Pointers - isSubsequence */
// their answer - 공간이 아닌 재귀
{
  function isSubsequence(str1, str2) {
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
    return isSubsequence(str1, str2.slice(1))
  }
  console.log(isSubsequence('hello', 'hello world'))
  console.log(isSubsequence('sing', 'sting'))
  console.log(isSubsequence('abc', 'abracadabra'))
  console.log(isSubsequence('abc', 'acb'))
}

// their answer - iteration
{
  function isSubsequence(str1, str2) {
    let i = 0
    let j = 0
    if (!str1) return true
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++
      if (i === str1.length) return true
      j++
    }
    return false
  }
  console.log(isSubsequence('hello', 'hello world'))
  console.log(isSubsequence('sing', 'sting'))
  console.log(isSubsequence('abc', 'abracadabra'))
  console.log(isSubsequence('abc', 'acb'))
}

// my answer
{
  function isSubsequence(str1, str2) {
    if (str1.length > str2.length) {
      return false
    }

    let first = 0
    let second = 0

    while (second < str2.length) {
      if (str1[first] === str2[second]) {
        first++
      }
      if (first >= str1.length) {
        return true
      }
      second++
    }
    return false
  }
  console.log(isSubsequence('hello', 'hello world'))
  console.log(isSubsequence('sing', 'sting'))
  console.log(isSubsequence('abc', 'abracadabra'))
  console.log(isSubsequence('abc', 'acb'))
}

/* 도전 과제 - 코딩 연습 5: Multiple Pointers - averagePair */
// their answer
{
  function averagePair(arr, num) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
      const avg = (arr[start] + arr[end]) / 2
      if (avg === num) return true
      else if (avg < num) start++
      else end--
    }
    return false
  }
  console.log(averagePair([1, 2, 3], 2.5))
  console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
  console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
  console.log(averagePair([], 4))
}

// my answer
{
  function averagePair(arr, average) {
    if (arr.length <= 1 || average <= 0) {
      return false
    }

    let start = 0
    let next = 1

    while (next < arr.length) {
      const sum = (arr[start] + arr[next]) / 2
      if (sum === average) {
        return true
      }
      if (next >= arr.length - 1) {
        start++
        next = start + 1
        continue
      }
      next++
    }
    return false
  }
  console.log(averagePair([1, 2, 3], 2.5))
  console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
  console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
  console.log(averagePair([], 4))
}

/* 도전 과제 - 코딩 연습 4: Frequency Counter / Multiple Pointers - areThereDuplicates */
// their answer
{
  const areThereDuplicates = (...args) => {
    // Two pointers
    args.sort((a, b) => a > b)
    let start = 0
    let next = 1
    while (next < args.length) {
      if (args[start] === args[next]) {
        return true
      }
      start++
      next++
    }
    return false
  }
  console.log(areThereDuplicates(1, 2, 3))
  console.log(areThereDuplicates(1, 2, 2))
  console.log(areThereDuplicates('a', 'b', 'c', 'a'))
}

/* 도전 과제 - 코딩 연습 4: Frequency Counter / Multiple Pointers - areThereDuplicates */
// my answer
{
  const areThereDuplicates = (...args) => {
    let left = 0
    const right = args.length - 1

    while (left < right) {
      const leftVal = args[left]
      const rightVal = args[right]

      if (leftVal === rightVal) {
        return true
      }

      left++
    }

    return false
  }
  console.log(areThereDuplicates(1, 2, 3))
  console.log(areThereDuplicates(1, 2, 2))
  console.log(areThereDuplicates('a', 'b', 'c', 'a'))
}

{
  const sumZero = arr => {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
      const sum = arr[left] + arr[right]

      if (sum === 0) {
        return [arr[left], arr[right]]
      }
      sum > 0 ? right-- : left++
    }
  }

  console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]))
}
