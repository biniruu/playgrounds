import { ChangeEvent } from 'react'
import { useSetRecoilState } from 'recoil'
import text from 'recoil/text'

function AtomSet() {
  const setText = useSetRecoilState(text)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setText(value)
  }

  return (
    <>
      <h1>AtomSet</h1>
      <input type="text" name="text" id="text" onChange={handleChange} />
    </>
  )
}

export default AtomSet
