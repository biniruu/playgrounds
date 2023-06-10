/* eslint-disable no-console */
/**
 * 학습 자료
 * 맵과 셋 : https://ko.javascript.info/map-set
 * 키기반의 컬렉션 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Keyed_collections
 * JavaScript Collections : https://velog.io/@yesdoing/JavaScript-Collections
 */

// 셋은 중복을 허용하지 않는 특별한 컬렉션
// 키 없는 값을 저장한다

// 근데 컬렉션이 뭐지?

// 데이터의 집합(자료구조)
// 데이터를 담아두는 그릇이라고 봐도 무방할 듯

// 자바스크립트에는 다음과 같은 컬렉션이 있다
// Object, Array, Map, Set, WeakMap, WeakSet, Typed Array

// es5까지는 Object, Array만
// es6부터 Map, Set, WeakMap, WeakSet, Typed Array 추가

/**
 * 주요 메서드
 */

// 1️⃣ new Set(iterable) : iterable 객체를 전달 받으면(대체로 배열을 받음) 그 값을 복사해서 셋에 추가한다
{
  const set = new Set([1, 'a', true])
  console.log(set) // Set(3) { 1, 'a', true }

  // iterable 객체가 아닌 것을 전달 받으면 어떻게 되지?
  // const obj = { apple: '🍎', banana: '🍌' }
  // const setObj = new Set(obj) // 에러 발생

  // 값을 복사해서 셋에 추가한다면 참조가 아닌 값 자체를 복사하나?
  // 그렇다. 일단은
  const arr = ['🍎', '🍌']
  const setArr = new Set(arr)
  console.log(setArr) // Set(2) { '🍎', '🍌' }

  arr[1] = '🥕'
  console.log(arr) // [ '🍎', '🥕' ]
  console.log(setArr) // Set(2) { '🍎', '🍌' }

  /* 아래 항목은 깊은 복사와 얕은 복사 개념을 잘못 이해한 상태에서 작성한 글
   * 나중에 꼭 수정하자
   */

  // depth가 깊은 iterable 객체도 모두 복사하나?
  // 셋은 얕은 복사를 한다. 직접 비교해 보자

  // 비교 대상이 되는 배열
  const arrDeep = ['🍎', ['🥕', ['🚀']]]

  // 얕은 복사를 이용해 arrDeep을 새로운 배열로 생성
  const arrDeepClone = [...arrDeep]
  console.log(arrDeepClone) // [ '🍎', [ '🥕', [ '🚀' ] ] ]

  // Set 생성
  const setArrDeep = new Set(arrDeep)
  console.log(setArrDeep) // Set(2) { '🍎', [ '🥕', [ '🚀' ] ] }

  // 깊은 복사를 이용해 arrDeep을 새로운 배열로 생성
  const trueDeepClone = JSON.parse(JSON.stringify(arrDeep))
  console.log(trueDeepClone) // [ '🍎', [ '🥕', [ '🚀' ] ] ]

  // 데이터 변경 시도
  arrDeep[0] = '🎊'
  arrDeep[1][1] = '🔥'

  // arrDeep은 당연히 변경됨
  console.log(arrDeep) // [ '🎊', [ '🥕', '🔥' ] ]

  // arrDeep의 얕은 복사는 arrDeep[0]만 변경되지 않고 다른 것은 변경됨
  console.log(arrDeepClone) // [ '🍎', [ '🥕', '🔥' ] ]

  // Set도 위와 동일
  console.log(setArrDeep) // Set(2) { '🍎', [ '🥕', '🔥' ] }

  // arrDeep의 깊은 복사만 아무 것도 변경되지 않음
  console.log(trueDeepClone) // [ '🍎', [ '🥕', [ '🚀' ] ] ]
}

// 2️⃣ add(value)
{
  const set = new Set()

  // 값을 추가해 보자
  const myName = { name: 'biniruu' }
  set.add(myName)

  // 값이 추가되었다
  console.log(set) // Set(1) { { name: 'biniruu' } }

  // 다른 값도 추가해보자
  const favouriteFood = { food: '🍕' }
  set.add(favouriteFood)

  // 역시 값이 추가되었다
  console.log(set) // Set(2) { { name: 'biniruu' }, { food: '🍕' } }
}

// 3️⃣ delete(value)
{
  const set = new Set()
  set.add({ apple: '🍎' })
  set.add({ banana: '🍌' })
  console.log(set) // Set(2) { { apple: '🍎' }, { banana: '🍌' } }

  // apple을 삭제하면
  set.delete({ apple: '🍎' })

  // 삭제가 안 된다
  console.log(set) // Set(2) { { apple: '🍎' }, { banana: '🍌' } }

  // delete는 실행 즉시 true 또는 false를 반환한다고 했는데
  console.log(set.delete({ apple: '🍎' })) // false

  // 혹시 iterable한 컬렉션이라 직접 삭제는 안 되나?
  const newSet = new Set(set)
  console.log(newSet) // Set(2) { { apple: '🍎' }, { banana: '🍌' } }

  for (const value of newSet) {
    newSet.delete(value)
  }

  // 예상이 맞았다
  console.log(newSet) // Set(0) {}

  // 그럼 value가 동일한 것만 삭제는 가능할까?
  for (const value of set) {
    value === { apple: '🍎' } && set.delete(value)
  }

  // 안 된다
  console.log(set) // Set(2) { { apple: '🍎' }, { banana: '🍌' } }
}
