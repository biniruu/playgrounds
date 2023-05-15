import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <ul className="flex">
        <li className="mx-4">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/state">useState</NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/effect">useEffect</NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/immer">useImmer</NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/reducer">useReducer</NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/context">useContext</NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/redux">Redux</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header
