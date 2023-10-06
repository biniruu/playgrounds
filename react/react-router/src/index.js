import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from './router'
// import routerAsObject from './routerAsObject'
// import routerWithoutLayout from './routerWithoutLayout'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <RouterProvider router={routerAsObject} /> */}
    {/* <RouterProvider router={routerWithoutLayout} /> */}
  </React.StrictMode>,
)
