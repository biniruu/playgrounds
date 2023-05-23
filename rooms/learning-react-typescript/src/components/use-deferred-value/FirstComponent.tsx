import { useDeferredValue, useEffect, useState } from 'react'

import { useInput } from 'utils/custom-hooks/useInput'

function FirstComponent() {
  const [name, setName] = useInput('')
  const [arr, setArr] = useState<string[]>([])
  const deferredName = useDeferredValue(name)

  const makeArr = (val: string) => {
    const value = new Array(10000).fill(val) as string[]
    if (value.length === 0) {
      return
    }
    setArr(value)
  }

  useEffect(() => {
    makeArr(deferredName)
  }, [deferredName])

  return (
    <div>
      <h1 className="mb-4 text-xl">FirstComponent</h1>
      <div>
        <input type="text" className="border" onChange={setName} />
      </div>
      <ul className="h-[20vh] overflow-y-scroll">
        {arr.map((item, idx) => {
          return <li key={`${item}${idx}`}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default FirstComponent
