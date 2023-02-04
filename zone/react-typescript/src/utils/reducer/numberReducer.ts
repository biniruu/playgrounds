interface Action {
  type: string
}

const numberReducer = (number: number, action: Action) => {
  switch (action.type) {
    case 'plus':
      return number + 1
      break
    case 'minus':
      return number - 1
      break

    default:
      throw Error(`Unexpected type ${action.type}`)

      break
  }
}

export default numberReducer
