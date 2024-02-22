/* eslint-disable no-console, no-inner-declarations */

/* 도전 과제 - 코딩 연습 9: Sliding Window - findLongestSubstring */
// their answer
{
  function findLongestSubstring(str) {
    let longest = 0
    const seen = {}
    let start = 0

    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      if (seen[char]) {
        start = Math.max(start, seen[char])
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1)
      // store the index of the next char so as to not double count
      seen[char] = i + 1
    }
    return longest
  }
  console.log(findLongestSubstring(''))
  console.log(findLongestSubstring('rithmschool'))
  console.log(findLongestSubstring('thisisawesome'))
  console.log(findLongestSubstring('thecatinthehat'))
  console.log(findLongestSubstring('bbbbbb'))
  console.log(findLongestSubstring('longestsubstring'))
  console.log(findLongestSubstring('thisishowwedoit'))
}

// my answer
// {
//   function findLongestSubstring(str) {
//     const leng = str.length
//     if (leng <= 0) {
//       return 0
//     }

//     let sum = 0
//     let tempSum = 0
//     let subStr = ''
//     for (let i = 0; i < leng; i++) {
//       if (subStr.includes(str[i])) {
//         subStr = ''
//         sum = tempSum > sum ? tempSum : sum
//         tempSum = 0
//         continue
//       }
//       subStr += str[i]
//       tempSum++
//     }

//     return sum
//   }
//   console.log(findLongestSubstring(''))
//   console.log(findLongestSubstring('rithmschool'))
//   console.log(findLongestSubstring('thisisawesome'))
//   console.log(findLongestSubstring('thecatinthehat'))
//   console.log(findLongestSubstring('bbbbbb'))
//   console.log(findLongestSubstring('longestsubstring'))
//   console.log(findLongestSubstring('thisishowwedoit'))
// }

/* 도전 과제 - 코딩 연습 8: Sliding Window - minSubArrayLen */
// their answer
{
  function minSubArrayLen(nums, sum) {
    let total = 0
    let start = 0
    let end = 0
    let minLen = Infinity

    while (start < nums.length) {
      // if current window doesn't add up to the given sum then
      // move the window to right
      if (total < sum && end < nums.length) {
        total += nums[end]
        end++
      }
      // if current window adds up to at least the sum given then
      // we can shrink the window
      else if (total >= sum) {
        minLen = Math.min(minLen, end - start)
        total -= nums[start]
        start++
      }
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
      else {
        break
      }
    }

    return minLen === Infinity ? 0 : minLen
  }
  console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))
  console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))
  console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))
  console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39))
  console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55))
  console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))
  console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95))
}

// my answer
// {
//   function minSubArrayLen(arr, int) {
//     let sum = 0
//     let result = 0

//     for (let i = 0; i < arr.length; i++) {

//     }
//   }
//   console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))
//   console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))
//   console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))
//   console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39))
//   console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55))
//   console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))
//   console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95))
// }

/* 도전 과제 - 코딩 연습 7: Sliding Window - maxSubarraySum */
// their answer
{
  function maxSubarraySum(arr, num) {
    if (arr.length < num) return null

    let total = 0
    for (let i = 0; i < num; i++) {
      total += arr[i]
    }
    let currentTotal = total
    for (let i = num; i < arr.length; i++) {
      currentTotal += arr[i] - arr[i - num]
      total = Math.max(total, currentTotal)
    }
    return total
  }
  console.log(maxSubarraySum([100, 200, 300, 400], 2))
  console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))
  console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2))
  console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2))
  console.log(maxSubarraySum([2, 3], 3))
}

// my answer
{
  function maxSubarraySum(arr, max) {
    if (arr.length <= max) {
      return null
    }

    let maxSum = 0
    let tempSum = 0

    for (let i = 0; i < max; i++) {
      tempSum += arr[i]
    }

    for (let i = 0; i < arr.length - max; i++) {
      tempSum = tempSum - arr[i] + arr[i + max]

      if (tempSum > maxSum) {
        maxSum = tempSum
      }
    }

    return maxSum
  }
  console.log(maxSubarraySum([100, 200, 300, 400], 2))
  console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))
  console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2))
  console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2))
  console.log(maxSubarraySum([2, 3], 3))
}

/* their answer : efficiency */
{
  const maxSubarraySum = (arr, num) => {
    let maxSum = 0
    let tempSum = 0

    if (arr.length < num) {
      return null
    }

    for (let i = 0; i < num; i++) {
      maxSum += arr[i]
    }
    tempSum = maxSum

    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i]
      maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum
  }

  console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))
}

/* their answer : not efficiency */
{
  const maxSubarraySum = (arr, num) => {
    if (num > arr.length) {
      return null
    }

    let max = -Infinity

    for (let i = 0; i < arr.length - num + 1; i++) {
      let temp = 0

      for (let j = 0; j < num; j++) {
        temp += arr[i + j]
      }

      if (temp > max) {
        max = temp
      }
    }

    return max
  }

  console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))
}

/* my answer */
{
  const maxSubarraySum = (arr, num) => {
    if (num > arr.length) {
      return null
    }

    let sum = 0

    for (let i = 0; i < arr.length; i++) {
      const END = i + num
      const newArr = arr.slice(i, END)

      if (newArr.length < num) {
        break
      }

      let value = 0

      newArr.forEach(val => {
        value += val
      })

      if (value > sum) {
        sum = value
      }
    }

    return sum
  }

  console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))
}
