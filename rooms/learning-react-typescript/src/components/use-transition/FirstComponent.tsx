import { useEffect, useState, useTransition } from 'react'

import { useInput } from 'utils/custom-hooks/useInput'

function FirstComponent() {
  const [name, setName] = useInput('')
  const [arr, setArr] = useState<string[]>([])
  const [isPending, startTransition] = useTransition()

  const makeArr = (val: string) => {
    const value = new Array(10000).fill(val) as string[]
    setArr(value)
  }

  useEffect(() => {
    startTransition(() => {
      makeArr(name)
    })
  }, [name])

  return (
    <div>
      <h1 className="mb-4 text-xl">FirstComponent</h1>
      <div>
        <input type="text" className="border" onChange={setName} />
        <p>{isPending && '잠깐만 기다려'}</p>
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
