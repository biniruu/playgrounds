import { MouseEvent, useReducer } from 'react'

import numberReducer from 'utils/reducer/numberReducer'

function Temp() {
  const [number, dispatch] = useReducer(numberReducer, 0)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLButtonElement
    const type = target.textContent as string
    dispatch({ type })
  }

  return (
    <>
      <div>Temp</div>

      <div>{number}</div>
      <button onClick={handleClick}>plus</button>
      <button onClick={handleClick}>minus</button>
    </>
  )
}

export default Temp
