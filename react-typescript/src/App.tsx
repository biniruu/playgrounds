import '_css/style.css'
import '_/App.css'

import UseImmer from 'components/immer/UseImmer'
import UseReducer from 'components/useReducer/UseReducer'

function App() {
  return (
    <div>
      <p className="bold App">Lorem ipsum dolor sit</p>
      <UseImmer />
      <UseReducer />
    </div>
  )
}

export default App
