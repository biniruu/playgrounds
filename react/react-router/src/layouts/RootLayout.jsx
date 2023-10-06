import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import Header from '../components/Header'

function RootLayout() {
  return (
    <>
      <Header />
      <main style={{ marginTop: '2rem', marginBottom: '3rem' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
