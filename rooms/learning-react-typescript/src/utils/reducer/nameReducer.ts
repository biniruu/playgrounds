interface Action {
  type: 'fruit' | 'chips'
  value: string
}

export const nameReducer = (name: string, action: Action) => {
  switch (action.type) {
    case 'fruit':
      return name + action.value
    case 'chips':
      return action.value + name
    default:
      return name
  }
}
