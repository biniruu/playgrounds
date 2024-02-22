/* eslint-disable no-console, no-inner-declarations */

/* recursive */
{
  function merge(arr1, arr2) {
    let result = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) {
        result.push(arr2[j])
        j++
      } else {
        result.push(arr1[i])
        i++
      }
    }

    const arr = i < arr1.length ? arr1.slice(i) : arr2.slice(j)
    result = [...result, ...arr]

    return result
  }

  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }

  console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]))
  console.log(merge([1, 10, 50], [2, 14, 99, 100]))
  console.log(merge([], [1, 13]))
}

// my answer
{
  function merge(arr1, arr2) {
    let result = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) {
        result.push(arr2[j])
        j++
      } else {
        result.push(arr1[i])
        i++
      }
    }

    const arr = i < arr1.length ? arr1.slice(i) : arr2.slice(j)
    result = [...result, ...arr]

    return result
  }
  console.log(merge([1, 10, 50], [2, 14, 99, 100]))
  console.log(merge([], [1, 13]))
}
