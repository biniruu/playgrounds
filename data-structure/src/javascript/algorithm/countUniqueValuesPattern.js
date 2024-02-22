/* eslint-disable no-console */

{
  const countUniqueValues = arr => {
    if (arr.length === 0) {
      return 0
    }

    let j = 0

    for (let i = 1; i < arr.length; i++) {
      if (arr[j] === arr[i]) {
        continue
      }
      j++
      arr[j] = arr[i]
    }

    return j + 1
  }
  console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
}
