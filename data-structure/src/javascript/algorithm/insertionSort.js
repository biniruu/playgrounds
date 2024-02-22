/* eslint-disable no-console, no-inner-declarations */

// their answer
{
  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      const currVal = arr[i]
      let idx = 0
      for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
        console.log('📝 -- j:', j)
        arr[j + 1] = arr[j]
        idx = j
      }
      console.log(idx)
      arr[idx + 1] = currVal
    }
    return arr
  }
  console.log(insertionSort([2, 1, 9, 76, 4]))
}

// my answer
{
  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let j = i
      while (j > 0) {
        if (arr[j] < arr[j - 1]) {
          ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
        }
        j--
      }
    }
    return arr
  }
  console.log(insertionSort([2, 1, 9, 76, 4]))
}
