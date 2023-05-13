import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="mb-8">
      <nav>
        <ul className="flex">
          <li className="mx-4">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mx-4">
            <NavLink to="/state">useState</NavLink>
          </li>
          <li className="mx-4">
            <NavLink to="/immer">useImmer</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
