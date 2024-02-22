/* eslint-disable no-console, no-inner-declarations */

// their answer
{
  function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
      return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
    }

    for (let i = 0; i < arr.length; i++) {
      let lowest = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[lowest] > arr[j]) {
          lowest = j
        }
      }
      if (i !== lowest) {
        swap(arr, i, lowest)
      }
    }
    return arr
  }
  console.log(selectionSort([34, 22, 10, 19, 17]))
}

// my answer
// {
//   function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       let temp = arr[i]
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < temp) {
//           temp = arr[j]
//         }
//         ;[arr[i], arr[j]] = [arr[j], arr[i]]
//       }
//     }
//     return arr
//   }
//   console.log(selectionSort([34, 22, 10, 19, 17]))
// }
