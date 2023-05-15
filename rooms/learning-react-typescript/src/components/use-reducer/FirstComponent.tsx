import { MouseEvent, useReducer } from 'react'

import numberReducer from 'utils/reducer/numberReducer'

function FirstComponent() {
  const [number, dispatch] = useReducer(numberReducer, 0)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement
    const type = target.textContent
    type && dispatch({ type })
  }

  return (
    <div className="mb-8">
      <h1 className="mb-4 text-xl">FirstComponent</h1>
      <div className="mb-4">{number}</div>
      <button className="mr-2 rounded-full bg-sky-600 px-4 py-2 text-center text-white" onClick={handleClick}>
        plus
      </button>
      <button className="rounded-full bg-sky-600 px-4 py-2 text-center text-white" onClick={handleClick}>
        minus
      </button>
    </div>
  )
}

export default FirstComponent
