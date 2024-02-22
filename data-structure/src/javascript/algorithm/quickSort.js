/* eslint-disable no-console, no-inner-declarations */

{
  // eslint-disable-next-line no-unused-vars
  function pivot(arr, start = 0, end = arr.length + 1) {
    const pivot = arr[start]
    let swapIdx = start

    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivot) {
        swapIdx++
        ;[arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]]
      }
    }
    ;[arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]]
    return swapIdx
  }

  function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      const pivotIndex = pivot(arr, left, right)
      quickSort(arr, left, pivotIndex - 1)
      quickSort(arr, pivotIndex + 1, right)
    }
    return arr
  }
  console.log(quickSort([4, 6, 9, 1, 2, 5, 3]))
}
