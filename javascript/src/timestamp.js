/* eslint-disable no-console */
const TheDate = new Date()

const year = TheDate.getFullYear()
const month = (TheDate.getMonth() + 1).toString().padStart(2, '0')
const date = TheDate.getDate().toString().padStart(2, '0')
const hour = TheDate.getHours().toString().padStart(2, '0')
const minute = TheDate.getMinutes().toString().padStart(2, '0')

console.log(year)
console.log(month)
console.log(date)
console.log(hour)
console.log(minute)
