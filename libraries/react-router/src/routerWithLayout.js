import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'

const routerWithoutLayout = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
    </Route>,
  ),
)

export default routerWithoutLayout
