import FirstComponent from 'components/context-api/FirstComponent'
import { useRef, useState } from 'react'

function UseContext() {
  const [name, setName] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (inputRef.current === null) {
      return
    }
    setName(inputRef.current.value)
  }

  return (
    <div>
      <h1 className="mb-4 text-xl">UseContext</h1>
      <input type="text" ref={inputRef} className="border" />
      <button className="rounded-full bg-sky-600 px-4 py-2 text-center text-white" onClick={handleClick}>
        Click
      </button>
      <FirstComponent name={name} />
    </div>
  )
}

export default UseContext
