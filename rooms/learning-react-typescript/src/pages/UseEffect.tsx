import { ChangeEvent, useEffect, useRef, useState } from 'react'

function UseEffect() {
  const [name, setName] = useState('')
  const [list, setList] = useState<string[]>([])

  const elemRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (list.length) {
      const element = elemRef.current?.classList
      element?.replace('invisible', 'visible')

      setTimeout(() => {
        element?.replace('visible', 'invisible')
      }, 1000)
    }
  }, [list])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleNameSubmit = () => {
    setList(prevState => {
      return [...prevState, name]
    })
  }

  const handleFocus = () => {
    if (inputRef.current === null) {
      return
    }
    inputRef.current.value = ''
    setName('')
  }

  return (
    <div className="flex flex-col">
      <h1 className="mb-4 text-xl">UseEffect</h1>
      <div className="mb-4">
        <input ref={inputRef} type="text" className="border" onChange={handleChange} onFocus={handleFocus} />
        <button className="rounded-full bg-sky-600 px-4 py-2 text-center text-white" onClick={handleNameSubmit}>
          Submit
        </button>
      </div>
      <div className="mb-4">name: {name}</div>
      <div ref={elemRef} className="invisible">
        Updated
      </div>
      <ul>
        {list.map((item, idx) => {
          return <li key={`${item}${idx}`}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default UseEffect
