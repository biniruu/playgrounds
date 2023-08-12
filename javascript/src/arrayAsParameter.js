const callbackFunc = (str, num) => `I have an ${str}. Just ${num}.`

const func = ([str, num], callback) => callback(str, num)

const result = func(['🍎', 1], callbackFunc)

console.log(result) // I have an 🍎. Just 1.
