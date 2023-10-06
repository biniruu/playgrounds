import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>,
  ),
)

export default router
