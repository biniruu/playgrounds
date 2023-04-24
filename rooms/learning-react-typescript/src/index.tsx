import 'index.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import App from 'App'
import store from 'app/store'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import reportWebVitals from 'reportWebVitals'
import UseState from './pages/UseState'

// eslint-disable-next-line prettier/prettier
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/state" element={<UseState />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
