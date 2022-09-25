/**
 * 제너레이터 함수
 *
 * ES6 문법을 잘 안다고 하면서 제너레이터를 모른다고 하면 ES6를 잘 안다고 할 수 있겠나?
 * 하는 질문을 받고 찔려서 살펴보았습니다.
 *
 * 학습 자료
 * generator : https://ko.javascript.info/generators
 * yield : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/yield
 */

// 제너레이터 함수는 일반적인 함수구조인 function에 *이 붙은 function* 로 되어 있습니다.
// 제너레이터 함수에서 사용한 yield는 제너레이터 함수를 중지하거나 재개하는데 사용합니다.
// yield 뒤에 오는 표현식은 yield의 호출부로 반환되는 값을 의미합니다.
function* generatorSequence() {
  yield 1
  yield 2
  return 3
}

const generator = generatorSequence()
console.log(generator) // Object [Generator] {}

const one = generator.next()
console.log(one) // { value: 1, done: false }
console.log(JSON.stringify(one)) // {"value":1,"done":false}

const two = generator.next()
console.log(two) // { value: 2, done: false }
console.log(JSON.stringify(two)) // {"value":2,"done":false}

const three = generator.next()
console.log(three) // { value: 3, done: true }
console.log(JSON.stringify(three)) // {"value":3,"done":true}

const four = generator.next()
console.log(four) // { value: undefined, done: true }
console.log(JSON.stringify(four)) // {"done":true}

console.log('🚀 --------------------------------')

const generatorIsIterable = generatorSequence()

// 제너레이터는 iterable한 함수다.
for (const value of generatorIsIterable) {
  console.log(value) // 1, 2
}

function* generatorSequenceWithoutReturn() {
  yield 1
  yield 2
  yield 3
}

const generatorWithoutReturn = generatorSequenceWithoutReturn()

// 그러나 done이 true가 되면 value를 반환하지 않기 때문에 3은 로그에 찍히지 않는다.
// return을 yield로 바꾸고 나면 done이 false가 되므로 로그에 3까지 찍힌다.
for (const value of generatorWithoutReturn) {
  console.log(value) // 1, 2, 3
}

// 다른 반복문으로도 반복시킬 수 있을까?
for (const value in generatorWithoutReturn) {
  console.log(value) // 값 없음
}

// 안 된다. for문은?
for (let i = 0; i < generatorWithoutReturn.length; i++) {
  console.log(generatorWithoutReturn[i]) // nothing
}

// 안 된다. 설마 length도 없나?
console.log(generatorWithoutReturn.length) // undefined

// 없다. key도 당연히 없겠지?
for (const key in generatorWithoutReturn) {
  console.log(key) // 값 없음
}

// 없다. 근데 어떻게 for of문을 돌리면 값이 나오지?

console.log('✨ --------------------------------')
