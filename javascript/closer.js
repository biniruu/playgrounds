/**
 * 봐도 봐도 명확한 이해가 어려운 그것, 클로저
 *
 * 학습 자료
 * 변수의 유효범위와 클로저 : https://ko.javascript.info/closure
 */

/* 블록 */

// 블록 안은 구분된 세상! 함부로 침범할 수 없어
{
  const emoji = '🎉'
  console.log(emoji) // 🎉
}
{
  const emoji = '🚀'
  console.log(emoji) // 🚀
}

// 다른 블록으로도 접근할 수 없고
{
  // console.log(emoji) // ReferenceError: emoji is not defined
}

// 그러나 외부로는 접근할 수 있지
const emoji = '😎'
{
  console.log(emoji) // 😎
}

console.log('✨ -----------------------------------------------------')

/* 중첩 함수 */

// 함수를 품은 함수
function outerFunc(firstNum, lastNum) {
  function innerFunc() {
    return firstNum + lastNum
  }
  console.log(innerFunc()) // 3
  return innerFunc
}

const sum = outerFunc(1, 2)
console.log(sum()) // 3

console.log('✨ ---------------------------------------------------')

/* 클로저 */

// 클로저는 외부 변수를 기억하고, 이 외부 변수에 접근할 수 있는 함수를 말한다
// 클로저가 가능한 이유는 함수가 생성될 때 [[Environment]] 속성을 부여 받기 때문이다
// 이 [[Environment]] 속성에는 함수가 생성된 lexical environment에 대한 참조가 저정된다
function outerEnvironment() {
  let num = 0
  function lexicalEnvironment() {
    // 이 렉시컬 환경에는 num이 없기 때문에 렉시컬 환경이 참조하는 outer lexical environment으로 넘어가 num을 찾는다
    // 함수 호출이 완료된 후에도 이 렉시컬 환경에는 num이 있는 외부 렉시컬 환경이 저장되기 때문에 외부 렉시컬 환경은 가비지 컬렉션 대상에서 제외된다
    // 이런 과정을 통해 함수 호출이 완료된 후에도 외부 렉시컬 환경 참조를 저장하고 있는 함수를 클로저라고 한다
    return num++
  }
  return lexicalEnvironment
}

// 중첩 함수를 변수에 저장하면서, 중첩 함수와 연관된 모든 렉시컬 환경은 메모리에 남는다
let closer = outerEnvironment()
console.log(closer()) // 0
console.log(closer()) // 1
console.log(closer()) // 2

// 중첩 함수와 연관된 렉시컬 환경에 도달할 수 없게 되면 모든 렉시컬 환경은 메모리에서 삭제된다
closer = null
