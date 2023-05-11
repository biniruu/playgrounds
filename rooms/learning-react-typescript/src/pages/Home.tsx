import UseImmer from 'components/immer/UseImmer'
import Counter from 'components/redux/Counter'
import UseReducer from 'components/useReducer/UseReducer'

function Home() {
  return (
    <div>
      <UseImmer />
      <UseReducer />
      <Counter />
    </div>
  )
}

export default Home
