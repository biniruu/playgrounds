/* eslint-disable no-console, no-inner-declarations */

/* 나이브 문자열 검색 구현 */
{
  function naiveSearch(long, short) {
    let count = 0

    for (let i = 0; i < long.length; i++) {
      for (let j = 0; j < short.length; j++) {
        if (short[j] !== long[i + j]) {
          break
        }
        if (j === short.length - 1) {
          count++
        }
      }
    }

    return count
  }
  console.log(naiveSearch('lorie loled', 'lol'))
  console.log(naiveSearch('lorie loled', 'lo'))
  console.log(naiveSearch('lorie loled', 'pop'))
}
