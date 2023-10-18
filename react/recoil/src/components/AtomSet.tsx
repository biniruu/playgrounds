import { ChangeEvent } from 'react'
import { useSetRecoilState } from 'recoil'
import atomTestAtom from 'recoil/atomTest'

function AtomSet() {
  const setAtomTest = useSetRecoilState(atomTestAtom)

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as typeof e.target & { text: { value: string } }
    const value = target.text.value
    setAtomTest(value)
  }

  return (
    <>
      <h1>AtomSet</h1>
      <input type="text" name="text" id="text" onChange={handleChange} />
    </>
  )
}

export default AtomSet
