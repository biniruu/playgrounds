import { useState } from 'react'

function UseEffect() {
  const [count, setCount] = useState(1)

  const handleCountUpdate = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>UseEffect</h1>
      <button onClick={handleCountUpdate}>Update</button>
      <div>count: {count}</div>
    </div>
  )
}

export default UseEffect
