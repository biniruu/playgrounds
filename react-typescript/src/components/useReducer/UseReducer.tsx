import { MouseEvent, useReducer } from 'react'

import numberReducer from 'utils/reducer/numberReducer'

function UseReducer() {
  // const [value, setValue] = useState(0)
  const [number, dispatch] = useReducer(numberReducer, 0)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLButtonElement
    const type = target.textContent as string
    dispatch({ type })
  }

  return (
    <>
      <h1>UseReducer</h1>
      <div>{number}</div>
      <button onClick={handleClick}>plus</button>
      <button onClick={handleClick}>minus</button>
    </>
  )
}

export default UseReducer
