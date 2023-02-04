/**
 * 학습 자료
 * 프라미스 : https://ko.javascript.info/promise-basics
 * 자바스크립트 Promise 쉽게 이해하기 : https://joshua1988.github.io/web-development/javascript/promise-for-beginners/#프로미스의-에러-처리-방법
 */

// new Promise가 전달 받는 함수를 executer(실행자 또는 실행 함수)라고 한다
// resolve와 reject 인자에는 자바스크립트에서 자체 제공하는 콜백 함수가 들어간다
const promise = new Promise((resolve, reject) => {
  // resolve 또는 reject를 반드시 실행해야 한다
})

// 실행 함수에서는 resolve와 reject 둘 중 하나만 실행시켜야 한다
// 둘 다 실행시키려고 할 경우, Promise는 둘 중에 우선 선언된 것만 처리하며 이후에 실행을 기다리는 모든 것은 무시한다
const firstOnly = new Promise((resolve, reject) => {
  resolve('🚀')
  reject('😖')
})
firstOnly.then(res => console.log(res)) // 🚀

// 여기서 잠깐!! 둘 다 실행하지 않으면 어떻게 될까?
const nothing = new Promise((resolve, reject) => {
  console.log('🥲') // 🥲
})
nothing.then(res => console.log(res)) // 아무런 동작도 일어나지 않는다

// 위에서 nothing의 실행 함수가 반환하는 결과를 then 메서드가 받지도 않았는데 어떻게 log가 찍혔지?
// 이는 자바스크립트 코드를 파싱하는 과정에서 Promise 함수를 만나면 함수의 실행 컨텍스트가
// 생성됨과 동시에 Promise의 실행 함수가 즉시 실행되기 때문이다
// 따라서 위 코드에서 then 메서드를 사용한 줄을 제거해도 log는 정상적으로 찍힌다
const logFire = new Promise((resolve, reject) => {
  console.log('😎') // 😎
})

// 여기까지 작성한 코드를 실행해 보면 콘솔 창에 다음과 같은 순서로 로그가 찍힌다

// 🥲
// 😎
// 🚀

// 🚀가 가장 먼저 선언됐지만 가장 나중에 찍히는 이유도 위에서 설명한 Promise의 실행 방식이 여느 함수와 다르기 때문이다
// 🥲와 😎는 Promise 함수의 실행 컨텍스트가 생성되면서 실행 함수가 곧장 실행되어 console.log가 바로 실행되는 반면
// 🚀는 실행 함수가 실행되면서 resolve에 담겨 firstOnly 변수에 할당되었고, 이를 then 메서드가 받아
// console.log의 인자에 담은 후 console.log를 실행시켰기 때문에 🥲나 😎보다 늦게 실행되었다

// 위 코드에서 promise와 nothing의 상태는 둘 다 pending 이다
// resolve나 reject 중 어떤 것도 실행하지 않았기 때문이다
console.log(promise) // Promise { <pending> }
console.log(nothing) // Promise { <pending> }

/* then 메서드 */

// then은 result와 error 두 개의 인자를 받는다
// 각 인자가 받는 콜백 함수를 통해 resolve와 reject를 처리한다
const resolve = new Promise(resolve => {
  resolve('🎉')
})

resolve.then(
  result => console.log(result), // 🎉
  error => console.log(error), // 실행되지 않는다
)

// 프로미스와 상관없긴 하지만, 이렇게 해도 정상적으로 출력된다
resolve.then(console.log, console.log) // 앞쪽 console.log는 🎉를 출력하고, 뒤쪽 console.log는 실행되지 않는다

// 여기서 두 번째 인자로 받는 콜백은 Promise에서 발생된 에러를 처리하기 위해서가 아니라
// reject를 처리하기 위해 사용하는 함수다
const reject = new Promise(reject => {
  reject('💩')
})

reject.then(
  result => console.log(result), // 실행되지 않는다
  error => console.log(error), // 💩
)

/* catch 메서드 */

// 위에서 살펴본 대로 두 번째 인자로 받는 콜백은 에러 처리를 위한 것이 아니기 때문에
// 에러 처리를 위해서는 catch 메서드를 사용해야 한다
// const errorFire = new Promise((resolve, reject) => {
//   reject(new Error('🤦🏻‍♂️'))
// })

// errorFire //
//   .then(result => console.log(result)) // 실행되지 않는다
// .catch(error => console.log(error)) // 에러 메시지 출력

/* finally 메서드 */

// finally는 프로미스의 결과와 에러를 동시에 전달한다
// 따라서 체이닝 순서를 then과 catch보다 앞서 두어도 문제없다
new Promise(resolve => resolve('🥕')) //
  .finally(() => console.log('🍌')) // 🍌
  .then(console.log) // 🥕
