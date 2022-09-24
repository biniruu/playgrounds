/**
 * 봐도 봐도 명확한 이해가 어려운 그것, 클로저
 *
 * 학습 자료
 * 변수의 유효범위와 클로저: https://ko.javascript.info/closure
 */

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
