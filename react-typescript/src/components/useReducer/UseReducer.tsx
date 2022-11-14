import { useState } from 'react'

function UseReducer() {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue(prevState => prevState + 1)
  }

  return (
    <>
      <h1>UseReducer</h1>
      <div>{value}</div>
      <button onClick={handleClick}>click</button>
    </>
  )
}

export default UseReducer
