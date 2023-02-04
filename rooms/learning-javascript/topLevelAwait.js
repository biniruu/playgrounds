// resolve를 반환하는 promise 객체
const resolve = new Promise(resolve => {
  resolve('🚀') // Promise {<fulfilled>: '🚀'}
})

// reject를 반환하는 promise 객체
const reject = new Promise((resolve, reject) => {
  reject('😖') // Promise {<rejected>: '😖'}
})

/**
 * 이렇게 한 후에 바로 top-level await를 사용하면 될 줄 알았는데 (실제로 돼야 하는데)
 * 이상하게 에러가 발생한다
 *
 * SyntaxError: await is only valid in async functions and the top level bodies of modules
 *
 * 이는 node에서 top-level await를 사용할 때 발생하는 문제라 package.json에서
 * type 옵션을 module로 설정하면 해결된다
 */

const resultResolve = await resolve
console.log(resultResolve) // 🚀

const resultReject = await reject
console.log(resultReject) // 에러 발생
