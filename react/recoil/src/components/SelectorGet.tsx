import { useRecoilValue } from 'recoil'
import { withSuffix } from 'recoil/text'

function SelectorGet() {
  const textWithSuffix = useRecoilValue(withSuffix)

  return (
    <div>
      <h1>SelectorGet</h1>
      <p>{textWithSuffix}</p>
    </div>
  )
}

export default SelectorGet
