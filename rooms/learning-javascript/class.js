/* eslint-disable no-console, no-lone-blocks */

/**
 * 클래스
 *
 * [클래스와 기본 문법]{@link https://ko.javascript.info/class}
 * [클래스]{@link https://poiemaweb.com/es6-class}
 * [Class fields]{@link https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Public_class_fields}
 */

/* 기본 문법 */
class User {
  #privateName
  nickName
  constructor(name) {
    this.name = name
    this.#privateName = name
  }
  sayHi() {
    console.log(this.name) // 🍎
  }
  sayHiToPrivateOne() {
    console.log(this.#innerPrivateName)
  }
  get privateName() {
    return this.#privateName
  }
  get #innerPrivateName() {
    return this.#privateName
  }
  set privateName(name) {
    this.#privateName = name
  }
  get userNickName() {
    return this.nickName
  }
  set userNickName(name) {
    this.nickName = name
  }
  static staticMethod() {
    return '🍧'
  }
  static staticThis() {
    return this.name
  }
  static get staticGet() {
    return '🍭'
  }
}

const user = new User('🍎')
user.sayHi()

console.log(user.name)

/**
 * 자바스크립트에서 클래스는 다른 언어에서 사용하는 클래스와 다르다.
 */

// 클래스는 함수다. 정확히는 생성자 메서드다.
console.log(typeof User) // function
console.log(typeof User.prototype.constructor) // function
console.log(User === User.prototype.constructor) // true

// 생성자 함수는 선언하는 순간 내부에 this 객체를 생성하고, 생성자 함수 내부에서 선언한 메서드를 this 객체에 저장하는 방식을 취하지만,
// 클래스는 클래스 내부에서 생성한 메서드를 prototype에 저장한다.
console.log(typeof User.prototype.sayHi) // function
console.log(typeof user.sayHi) // function
console.log(typeof user.privateName) // function
console.log(Object.getOwnPropertyNames(User.prototype)) // ['constructor', 'sayHi', 'sayHiToPrivateOne', 'privateName', 'userNickName']

/**
 * 클래스는 단순한 편의 문법(syntactic sugar)일까?
 * 그렇지는 않다. 클래스 문법을 사용해서 만든 클래스에는 기존 방식대로 생성자 함수를 이용해 만든 클래스에는 없는
 * '[[isClassConstructor]]: true' 라는 특수 내부 프로퍼티가 생성된다.
 * 이 프로퍼티에 의해 다음과 같은 차이가 발생한다.
 *
 * - 클래스 안에서 선언한 메서드는 열거할 수 없다.
 * - 클래스 안에서는 'use strict' 모드가 적용된다.
 */
for (const key in user) {
  console.log(key) // name
}

/**
 * 클래스도 호이스팅이 된다.
 * 다만 let과 const처럼 TDZ가 발생하기 때문에 클래스 선언문 이전에는 클래스를 참조할 수 없다.
 */
{
  // 에러 발생
  // console.log(typeof User) // Cannot access 'User' before initialization

  class User {}
  console.log(typeof User) // function
}

/**
 * getter와 setter를 사용한다.
 */
console.log(user.sayHi)
console.log(user.userNickName) // undefined
user.userNickName = '🎉'
console.log(user.userNickName) // 🎉

// 에러 발생
// console.log(user.#innerPrivateName) // Property '#innerPrivateName' is not accessible outside class 'User' because it has a private identifier.

console.log(user.privateName) // 🍎
user.privateName = '🔥'
console.log(user.privateName) // 🔥

/**
 * 정적 메서드(static method)의 특징
 *
 * - 정적 메서드는 클래스 자신으로부터 직접 호출할 수 있다.
 * - 정적 메서드는 인스턴스로 호출할 수 없다.
 * - 정적 메서드 안에서 this는 클래스 필드가 아닌 정적 메서드 자신을 가리킨다.
 */

console.log(User.staticMethod()) // 🍧

// 에러 발생
// console.log(user.staticMethod()) // user.staticMethod is not a function

console.log(User.staticThis()) // User

console.log(User.staticGet) // 🍭
console.log(user.staticGet) // undefined
