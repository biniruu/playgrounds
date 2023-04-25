import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../utils/counter/counterSlice'

function Counter() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const count = useSelector(state => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unnecessary-type-assertion, @typescript-eslint/no-explicit-any, prettier/prettier
    const _state = state as unknown as any
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return _state.counter.value
  })
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
