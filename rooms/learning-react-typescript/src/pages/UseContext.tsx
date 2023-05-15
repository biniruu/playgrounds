import FirstComponent from 'components/context-api/FirstComponent'
import { NameContext } from 'contexts/NameContext'
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
    <div className="flex flex-col">
      <NameContext.Provider value={{ name }}>
        <h1 className="mb-4 text-xl">UseContext</h1>
        <div className="flex">
          <input type="text" ref={inputRef} className="border" />
          <button className="rounded-full bg-sky-600 px-4 py-2 text-center text-white" onClick={handleClick}>
            Click
          </button>
        </div>
        <FirstComponent />
      </NameContext.Provider>
    </div>
  )
}

export default UseContext
