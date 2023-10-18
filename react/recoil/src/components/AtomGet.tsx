import { useRecoilValue } from 'recoil'
import textAtom from 'recoil/text'

function AtomGet() {
  const text = useRecoilValue(textAtom)

  return (
    <div>
      <h1>AtomGet</h1>
      <p>{text}</p>
    </div>
  )
}

export default AtomGet
