import InputComp from 'components/forward-ref/InputComp'
import { useRef } from 'react'

function ForwardRef() {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (inputRef.current === null) {
      return
    }
    alert(inputRef.current.value)
    inputRef.current.focus()
    inputRef.current.value = ''
  }

  return (
    <div>
      <h1 className="mb-4 text-xl">ForwardRef</h1>
      <InputComp ref={inputRef} />
      <button className="rounded-full bg-sky-600 px-4 py-2 text-center text-white" onClick={handleClick}>
        Click
      </button>
    </div>
  )
}

export default ForwardRef
