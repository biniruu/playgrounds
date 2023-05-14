import { ChangeEvent, useState } from 'react'

function UseState() {
  const [time, setTime] = useState(1)
  const [name, setName] = useState('')
  const [list, setList] = useState<string[]>([])

  const handleClick = () => {
    setTime(time + 1)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(() => {
      return e.target.value
    })
  }

  const updateList = () => {
    setList(prevState => {
      return [...prevState, name]
    })
  }

  return (
    <div className="flex flex-col">
      <h1 className="mb-4 text-xl">UseState</h1>
      <Increase time={time} handleClick={handleClick} />
      <InputName list={list} handleChange={handleChange} updateList={updateList} />
    </div>
  )
}

function Increase({ time, handleClick }: { time: number; handleClick: () => void }) {
  return (
    <div className="mb-8">
      <p className="mb-2">현재 시각 {time}시</p>
      <button className="rounded-full bg-sky-600 px-4 py-2 text-center text-white" onClick={handleClick}>
        Increase
      </button>
    </div>
  )
}

interface InputNameProps {
  list: string[]
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  updateList: () => void
}

function InputName({ list, handleChange, updateList }: InputNameProps) {
  return (
    <div>
      <input type="text" className="border" onChange={handleChange} />
      <button className="rounded-full bg-sky-600 px-4 py-2 text-center text-white" onClick={updateList}>
        Add
      </button>
      <ul>
        {list.map((name, idx) => {
          return <li key={`${name}${idx}`}>{name}</li>
        })}
      </ul>
    </div>
  )
}

export default UseState
