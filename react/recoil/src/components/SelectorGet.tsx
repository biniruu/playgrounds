import { useRecoilValue } from 'recoil'
import { withPrefix, withSuffix } from 'recoil/text'

function SelectorGet() {
  const textWithSuffix = useRecoilValue(withSuffix)
  const textWithPrefix = useRecoilValue(withPrefix)

  return (
    <div>
      <h1>SelectorGet</h1>
      <dl>
        <dt>text with suffix</dt>
        <dd>{textWithSuffix}</dd>
      </dl>
      <dl>
        <dt>text with prefix</dt>
        <dd>{textWithPrefix}</dd>
      </dl>
    </div>
  )
}

export default SelectorGet
