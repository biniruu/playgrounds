import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center' }}>
      <h2 style={{ marginRight: '2rem' }}>Header</h2>
      <nav role="list">
        <Link to="/" style={{ marginRight: '0.5rem' }}>
          Home
        </Link>
        <Link to="about" style={{ marginRight: '0.5rem' }}>
          About
        </Link>
        <Link to="contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
