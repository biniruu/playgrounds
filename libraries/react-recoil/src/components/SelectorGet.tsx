import { useRecoilValue } from 'recoil'
import { withPrefix, withSuffix } from 'recoil/text'

function SelectorGet() {
  const inputValueWithSuffix = useRecoilValue(withSuffix)
  const inputValueWithPrefix = useRecoilValue(withPrefix)

  return (
    <>
      <h1>SelectorGet</h1>
      <dl>
        <dt className="font-bold">text with suffix</dt>
        <dd>{inputValueWithSuffix}</dd>
      </dl>
      <dl>
        <dt className="font-bold">text with prefix</dt>
        <dd>{inputValueWithPrefix}</dd>
      </dl>
    </>
  )
}

export default SelectorGet
