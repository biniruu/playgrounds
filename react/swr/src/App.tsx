import RefreshInterval from 'components/RefreshInterval'
import UseSWR from 'components/UseSWR'
import './App.css'

function App() {
  return (
    <div className="App">
      <UseSWR />
      <RefreshInterval />
    </div>
  )
}

export default App
