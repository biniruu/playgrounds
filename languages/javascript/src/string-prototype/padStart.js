/* eslint-disable no-console */
/**
 * String.prototype.padStart()
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart}
 */

const phoneNumber = '010-1234-5678'
const phoneNumberWithoutDash = phoneNumber.replaceAll('-', '')
const last4Digits = phoneNumberWithoutDash.slice(-4)
const maskPhoneNumber = last4Digits.padStart(phoneNumberWithoutDash.length, '*')

console.log(maskPhoneNumber) // *******5678
