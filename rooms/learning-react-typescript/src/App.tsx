import '_/App.css'
import '_css/style.css'

import Header from 'components/header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
