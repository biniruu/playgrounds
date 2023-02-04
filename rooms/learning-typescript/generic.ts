interface lengthy {
  length: number
}

const countAndDescribe = <T extends lengthy>(elem: T) => {
  if (elem.length > 5) {
    return `Length of elem is ${elem.length}`
  }
  return 'Too short'
}

console.log(countAndDescribe('hello'))

export {}
