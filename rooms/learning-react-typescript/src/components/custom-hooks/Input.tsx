import { useEffect, useRef } from 'react'

import { useInput } from 'utils/customHooks/useInput'

function Input() {
  const [inputValue, handleInputChange] = useInput('')

  const ref = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    alert(inputValue)
    if (ref.current === null) {
      return
    }
    ref.current.value = ''
    ref.current?.focus()
  }

  useEffect(() => {
    ref.current?.focus()
  }, [])

  return (
    <div>
      <h1 className="mb-4 text-xl">Input</h1>
      <input ref={ref} type="text" value={inputValue} className="border" onChange={handleInputChange} />
      <button className="mr-2 rounded-full bg-sky-600 px-4 py-2 text-center text-white" onClick={handleSubmit}>
        Click
      </button>
    </div>
  )
}

export default Input
