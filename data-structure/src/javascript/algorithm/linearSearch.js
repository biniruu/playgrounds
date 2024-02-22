/* eslint-disable no-console, no-inner-declarations */

/* Linear Search Exercise */
// my answer
{
  function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return i
      }
    }
    return -1
  }
  console.log(linearSearch([10, 15, 20, 25, 30], 15))
  console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4))
  console.log(linearSearch([100], 100))
  console.log(linearSearch([1, 2, 3, 4, 5], 6))
  console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10))
  console.log(linearSearch([100], 200))
}
