import { ForwardedRef, forwardRef } from 'react'

function InputComp(_: unknown, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <div>
      <h1 className="mb-4 text-xl">InputComp</h1>
      <input type="text" ref={ref} className="border" />
    </div>
  )
}

export default forwardRef(InputComp)
