/* eslint-disable no-console */
const num = [2, 5, 4]

const func = (num1, num2, num3) => `num1 = ${num1}, num2 = ${num2}, num3 = ${num3}`
const result1 = func.apply(this, num)

console.log(result1) // num1 = 2, num2 = 5, num3 = 4

/* unrelated to apply */
{
  const arrParamFunc = ([num1, num2, num3]) => `num1 = ${num1}, num2 = ${num2}, num3 = ${num3}`
  const result2 = arrParamFunc(num)

  console.log(result2) // num1 = 2, num2 = 5, num3 = 4

  const wrong1 = func([...num])
  const wrong2 = func(num)

  console.log(wrong1) // num1 = 2,5,4, num2 = undefined, num3 = undefined
  console.log(wrong2) // num1 = 2,5,4, num2 = undefined, num3 = undefined
}
