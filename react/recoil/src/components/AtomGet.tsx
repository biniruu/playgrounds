import { useRecoilValue } from 'recoil'
import text from 'recoil/text'

function AtomGet() {
  const inputValue = useRecoilValue(text)

  return (
    <>
      <h1>AtomGet</h1>
      <p>{inputValue}</p>
    </>
  )
}

export default AtomGet
