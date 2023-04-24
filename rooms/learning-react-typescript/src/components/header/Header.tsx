import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/state">useState</NavLink>
    </nav>
  )
}

export default Header
