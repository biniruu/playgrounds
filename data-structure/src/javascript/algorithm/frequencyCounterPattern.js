/* eslint-disable no-console, no-inner-declarations, prefer-rest-params */

/* 도전 과제 - 코딩 연습 3: Frequency Counter - sameFrequency */
// their answer
{
  function areThereDuplicates() {
    const collection = {}
    for (const val in arguments) {
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for (const key in collection) {
      if (collection[key] > 1) return true
    }
    return false
  }
  console.log(areThereDuplicates(1, 2, 3))
  console.log(areThereDuplicates(1, 2, 2))
  console.log(areThereDuplicates('a', 'b', 'c', 'a'))
}

/* 도전 과제 - 코딩 연습 3: Frequency Counter - sameFrequency */
// my answer
{
  const sameFrequency = (num1, num2) => {
    const str1 = num1.toString()
    const str2 = num2.toString()

    if (str1.length !== str2.length) {
      return false
    }

    const frequencyCounter1 = {}
    const frequencyCounter2 = {}

    for (const val of str1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (const val of str2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (const [key] of Object.entries(frequencyCounter1)) {
      if (!frequencyCounter1[key] || frequencyCounter1[key] !== frequencyCounter2[key]) {
        return false
      }
    }

    return true
  }
  console.log(sameFrequency(182, 281))
  console.log(sameFrequency(34, 14))
}

/* refactored */
{
  const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false
    }

    const frequencyCounter1 = {}
    const frequencyCounter2 = {}

    for (const val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (const val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (const key in frequencyCounter1) {
      if (!(key ** 2 in frequencyCounter2)) {
        return false
      }
      if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        return false
      }
    }

    console.log('📝 -- frequencyCounter1:', frequencyCounter1)
    console.log('📝 -- frequencyCounter2:', frequencyCounter2)

    return true
  }

  console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))
}

/* a naive solution */
{
  const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return
    }
    arr1.forEach(num => {
      const square = num ** 2
      const correctIndex = arr2.indexOf(square)
      correctIndex >= 0 && arr2.splice(correctIndex, 1)
    })
    return arr2.length === 0
  }

  const result = same([1, 2, 3], [4, 1, 9])
  // eslint-disable-next-line no-console
  console.log('📝 -- result:', result)
}
