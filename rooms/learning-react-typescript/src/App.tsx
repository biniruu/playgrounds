import '_/App.css'
import '_css/style.css'

import Header from 'components/header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <header className="mb-8">
        <Header />
      </header>
      <main className="flex h-screen place-content-center place-items-center">
        <Outlet />
      </main>
    </div>
  )
}

export default App
