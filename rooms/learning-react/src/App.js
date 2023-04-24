import './App.css'

import ContextApi from './components/ContextApi'
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} class-name="App-logo" alt="logo" />
      </header>
      <ContextApi></ContextApi>
    </div>
  )
}

export default App
