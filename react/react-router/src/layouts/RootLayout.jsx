import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Footer from '../components/Footer'
import Header from '../components/Header'

function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/auth')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate])

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
