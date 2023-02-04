import { useImmer } from 'use-immer'

function UseImmer() {
  const [number, updateNumber] = useImmer({ value: 0 })

  const plus = () => {
    updateNumber(number => void (number.value += 1))
  }

  const minus = () => {
    updateNumber(number => void (number.value -= 1))
  }

  return (
    <>
      <h1>UseImmer</h1>
      <div>{number.value}</div>
      <button onClick={plus}>plus</button>
      <button onClick={minus}>minus</button>
    </>
  )
}

export default UseImmer
