/* eslint-disable no-console, no-inner-declarations */
// their answer
{
  function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
    return arr
  }
  console.log(bubbleSort([37, 45, 29, 8]))
  console.log(bubbleSort([78, 23, 90, 2, 38, 55]))
  console.log(bubbleSort([8, 12, 29, -3, 37, 45, 88]))
}

// my answer
{
  function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          // es5 이전 방법
          // const temp = arr[j]
          // arr[j] = arr[i]
          // arr[i] = temp

          // es5 이후 방법
          ;[arr[i], arr[j]] = [arr[j], arr[i]]
        }
      }
    }
    return arr
  }
  console.log(bubbleSort([37, 45, 29, 8]))
  console.log(bubbleSort([78, 23, 90, 2, 38, 55]))
  console.log(bubbleSort([8, 12, 29, -3, 37, 45, 88]))
}
