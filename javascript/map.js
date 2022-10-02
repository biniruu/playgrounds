/**
 * 학습 자료
 * 맵과 셋 : https://ko.javascript.info/map-set
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
map.size // 1

// key에 해당하는 value를 삭제하고
map.delete('banana')

// 귀찮으면 한번에 삭제하기까지
map.clear()

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

// 맵이 키를 비교하는 방식은 일치 연산자와 다르다
// NaN === NaN은 false지만, 맵에서는 NaN과 NaN을 동일하게 취급한다
// 그런 까닭에 맵에서는 NaN을 key로 쓸 수 있다
// NaN === NaN이 false라면 NaN을 key로 썼을 경우 NaN의 값을 불러올 수 없을 테니...
const mapHasNanKey = new Map()
mapHasNanKey.set(NaN, 'Not a number')
console.log(mapHasNanKey.get(NaN)) // Not a number
