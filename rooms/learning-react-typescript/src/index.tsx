import 'index.css'

import App from 'App'
import store from 'app/store'
import CustomHooks from 'pages/CustomHooks'

import ForwardRef from 'pages/ForwardRef'
import Home from 'pages/Home'
import Redux from 'pages/Redux'
import UseContext from 'pages/UseContext'
import UseEffect from 'pages/UseEffect'
import UseImmer from 'pages/UseImmer'
import UseReducer from 'pages/UseReducer'
import UseState from 'pages/UseState'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import reportWebVitals from 'reportWebVitals'

// eslint-disable-next-line prettier/prettier
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/state" element={<UseState />} />
            <Route path="/effect" element={<UseEffect />} />
            <Route path="/immer" element={<UseImmer />} />
            <Route path="/reducer" element={<UseReducer />} />
            <Route path="/context" element={<UseContext />} />
            <Route path="/forward-ref" element={<ForwardRef />} />
            <Route path="/custom" element={<CustomHooks />} />
            <Route path="/redux" element={<Redux />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
