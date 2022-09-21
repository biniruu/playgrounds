/**
 * 제너레이터 함수
 *
 * ES6 문법을 잘 안다고 하면서 제너레이터를 모른다고 하면 ES6를 잘 안다고 할 수 있겠나?
 * 하는 질문을 받고 찔려서 살펴보았습니다.
 *
 * 학습 자료
 * generator: https://ko.javascript.info/generators
 * yield: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/yield
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
