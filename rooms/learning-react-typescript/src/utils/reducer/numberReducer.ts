interface Action {
  type: string
}

const numberReducer = (number: number, action: Action) => {
  switch (action.type) {
    case 'plus':
      return number + 1
    case 'minus':
      if (number <= 0) {
        return number
      }
      return number - 1
    default:
      console.error(`Received an unexpected type.`)
      return number
  }
}

export default numberReducer
