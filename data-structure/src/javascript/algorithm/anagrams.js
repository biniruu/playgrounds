/* eslint-disable no-console */
function validAnagram(first, second) {
  // add whatever parameters you deem necessary - good luck!
  if (first.length !== second.length) {
    return false
  }

  const result = {}

  for (let i = 0; i < first.length; i++) {
    const character = first[i]
    result[character] ? (result[character] += 1) : (result[character] = 1)
  }

  console.log('📝 -- result:', result)

  for (let i = 0; i < second.length; i++) {
    const character = second[i]
    if (!result[character]) {
      return false
    }
    result[character] -= 1
  }

  console.log('📝 -- result:', result)

  return true
}

console.log(validAnagram('aaz', 'zza'))
