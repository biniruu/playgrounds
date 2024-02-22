/* eslint-disable no-console */
/**
 * String.prototype.padEnd()
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd}
 */

const username = 'biniruu'
const first2Str = username.slice(0, 2)
const maskUsername = first2Str.padEnd(username.length, '*')

console.log(maskUsername) // bi*****
