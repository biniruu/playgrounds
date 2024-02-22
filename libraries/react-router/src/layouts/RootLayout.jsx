import { useLayoutEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import Footer from '../components/Footer'
import Header from '../components/Header'

function PrivateRoute({ isLoggedIn }) {
  const navigate = useNavigate()
  const location = useLocation()

  useLayoutEffect(() => {
    const paths = ['/about', '/contact']
    const needsAuth = !isLoggedIn && paths.includes(location.pathname)

    if (needsAuth) {
      navigate('/login')
    }
  }, [location])

  return <Outlet context={{ isLoggedIn }} />
}

function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      <Header />
      <main style={{ marginTop: '2rem', marginBottom: '3rem' }}>
        <PrivateRoute isLoggedIn={isLoggedIn} />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
