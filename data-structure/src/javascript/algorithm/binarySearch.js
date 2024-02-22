/* eslint-disable no-console, no-inner-declarations */

/* Binary Search Exercise */
// their answer
{
  function binarySearch(arr, elem) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)

    while (arr[middle] !== elem && start <= end) {
      if (arr[middle] < elem) {
        start = middle + 1
      } else {
        end = middle - 1
      }
      middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === elem ? middle : -1
  }
  console.log(binarySearch([1, 2, 3, 4, 5], 2))
  console.log(binarySearch([1, 2, 3, 4, 5], 3))
  console.log(binarySearch([1, 2, 3, 4, 5], 5))
  console.log(binarySearch([1, 2, 3, 4, 5], 6))
  console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10))
  console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95))
  console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100))
}

// my answer
// {
//   function binarySearch(arr, val) {
//     const centre = Math.floor(arr.length / 2)
//     if (val === arr[centre]) {
//       return centre
//     }
//     if (val === arr[centre + 1] || val === arr[centre - 1]) {
//       return val === arr[centre + 1] ? centre + 1 : centre - 1
//     }
//     if (val > arr[centre + 1] || val < arr[centre - 1]) {
//       const newArr = val < arr[centre] ? arr.slice(0, centre) : arr.slice(centre, arr.length)
//       return binarySearch(newArr, val)
//     }
//     return -1
//   }
//   console.log(binarySearch([1, 2, 3, 4, 5], 2))
//   console.log(binarySearch([1, 2, 3, 4, 5], 3))
//   console.log(binarySearch([1, 2, 3, 4, 5], 5))
//   console.log(binarySearch([1, 2, 3, 4, 5], 6))
//   console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10))
//   console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95))
//   console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100))
// }
