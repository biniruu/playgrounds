import { MouseEvent, useReducer } from 'react'

import { nameReducer } from 'utils/reducer/nameReducer'

function SecondComponent() {
  const [name, dispatch] = useReducer(nameReducer, '')

  const clickFruit = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    const value = target.textContent
    value && dispatch({ type: 'fruit', value })
  }

  const clickChips = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    const value = target.textContent
    value && dispatch({ type: 'chips', value })
  }

  return (
    <div>
      <h1 className="mb-4 text-xl">SecondComponent</h1>
      <p className="mb-4">{name}</p>
      <button className="mr-2 rounded-full bg-sky-600 px-4 py-2 text-center text-white" onClick={clickFruit}>
        🍎
      </button>
      <button className="rounded-full bg-sky-600 px-4 py-2 text-center text-white" onClick={clickChips}>
        🍟
      </button>
    </div>
  )
}

export default SecondComponent
