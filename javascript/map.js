/**
 * 학습 자료
 * 맵과 셋 : https://ko.javascript.info/map-set
 * Object.entries() : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * Object.fromEntries() : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
 */

// 다양한 내장 메서드를 지닌 짱짱 맵
// 맵을 만들고
const map = new Map()

// 맵에 key와 value를 저장하고
map.set('banana', '🍌')

// 저장한 key와 value를 꺼내고
console.log(map.get('banana')) // 🍌

// key를 가지고 있는지 여부를 판별하고
console.log(map.has('banana')) // true

// 요소를 몇 개나 가지고 있는지 확인하고
console.log(map.size) // 1

// key에 해당하는 value를 삭제하고
map.delete('banana')
console.log(map) // Map(0) {}

// 귀찮으면 한번에 삭제하기까지
map.set('banana', '🍌')
map.set('apple', '🍎')
console.log(map.size) // 2

map.clear()
console.log(map.size) // 0

// 맵은 객체와 비슷하지만, 다양한 자료형을 허용한다는 차이가 있다
// key를 문자로 변환하지 않고 입력했던 자료형 그대로 보관한다
map.set('1', 'string 1')
map.set(1, 'number 1')
map.set(true, 'true')
map.set(false, 'false')

console.log(map.get('1')) // string 1
console.log(map.get(1)) // number 1
console.log(map.get(true)) // true

// truthy 또는 falsy한 값도 boolean으로 취급하여 올바른 값을 반환할까?
console.log(map.get(0)) // undefined

// 그건 아니고, 명확하게 true 또는 false로 변환해야 한다
console.log(map.get(!!0)) // false

// 참고로 객체와 유사하다고 해서 객체처럼 취급하면 맵은 그냥 객체가 된다
const mapAsObj = new Map()
mapAsObj['apple'] = '🍎'
console.log(mapAsObj.apple) // 🍎
console.log(mapAsObj.get('apple')) // undefined

// 근데 타입은 둘 다 object네
console.log(typeof map) // object
console.log(typeof mapAsObj) // object

// 맵은 key로 객체를 할당할 수 있다
const objForKey = { apple: '🍎' }
const mapHasObjKey = new Map()

mapHasObjKey.set(objForKey, 'crazy')
console.log(mapHasObjKey.get(objForKey)) // crazy

// map.set()은 map 자신을 반환한다
const mapHasCarrotKey = new Map()
const returnedMap = mapHasCarrotKey.set('carrot', '🥕')
console.log(returnedMap) // Map(1) { 'carrot' => '🥕' }

// 따라서 Map.set 체이닝이 가능하다
const chainMap = new Map()
const mapChaining = chainMap.set(1, '1').set('apple', '🍎').set(true, 'true')
console.log(mapChaining) // Map(3) { 1 => '1', 'apple' => '🍎', true => 'true' }

// entries()는 어떤 결과가 나올까?
const keyValuePair = mapChaining.entries()
console.log(keyValuePair) // [Map Entries] { [ 1, '1' ], [ 'apple', '🍎' ], [ true, 'true' ] }

// key-value 쌍을 담은 배열이 될 수도 있다
const receiptMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
])
console.log(receiptMap) // [Map Entries] { [ 1, '1' ], [ 'apple', '🍎' ], [ true, 'true' ] }

// Object.entries()를 사용하면 좀 더 깔끔하게 key-value 쌍 배열을 만들 수 있다
const fruits = {
  banana: '🍌',
  apple: '🍎',
  carrot: '🥕',
}
const fruitsMap = new Map(Object.entries(fruits))
console.log(fruitsMap) // Map(3) { 'banana' => '🍌', 'apple' => '🍎', 'carrot' => '🥕' }

// 객체를 배열 형태의 Map으로 변환할 수도 있다
const fruitsObj = Object.fromEntries(fruitsMap.entries())
console.log(fruitsObj) // { banana: '🍌', apple: '🍎', carrot: '🥕' }

// entries()를 사용하지 않아도 동일한 결과를 얻을 수 있다
const fruitsObjWithoutEntries = Object.fromEntries(fruitsMap)
console.log(fruitsObjWithoutEntries) // { banana: '🍌', apple: '🍎', carrot: '🥕' }

// 그 이유를 학습 자료에 있는 대로 정리하자면 다음과 같다
// entries()가 없어도 정상적으로 동작하는 이유는 Object.fromEntries는 인수로 이터러블 객체를 받기 때문이다
// map.entries()는 이터러블 객체를 반환하며, map에서의 일반적인 반복은 map.entries()를 사용했을 때와 동일하게
// key-value 쌍을 반환하므로 map과 동일한 키-값을 가진 일반 객체를 얻게 된다

// 이렇게 정리를 했지만 아직 확실하게는 모르겠다🥲

// 맵이 키를 비교하는 방식은 일치 연산자와 다르다
// NaN === NaN은 false지만, 맵에서는 NaN과 NaN을 동일하게 취급한다
// 그런 까닭에 맵에서는 NaN을 key로 쓸 수 있다
// NaN === NaN이 false라면 NaN을 key로 썼을 경우 NaN의 값을 불러올 수 없을 테니...
const mapHasNanKey = new Map()
mapHasNanKey.set(NaN, 'Not a number')
console.log(mapHasNanKey.get(NaN)) // Not a number

// 맵은 똑똑하다. 삽입 순서도 기억하고, forEach 메서드를 내장하고 있어서 편리하게 이용할 수 있고
receiptMap.forEach((value, key, map) => {
  console.log(value, key, map)
  // 500 cucumber Map(3) { 'cucumber' => 500, 'tomatoes' => 350, 'onion' => 50 }
  // 350 tomatoes Map(3) { 'cucumber' => 500, 'tomatoes' => 350, 'onion' => 50 }
  // 50 onion Map(3) { 'cucumber' => 500, 'tomatoes' => 350, 'onion' => 50 }
})

// 맵이 key-value 쌍인 배열인 경우에도 get()으로 값을 가지고 올 수 있다
const cucumber = receiptMap.get('cucumber')
console.log(cucumber) // 500
