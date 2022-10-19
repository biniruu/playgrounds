import '_css/style.css'
import '_/App.css'

import Temp from 'components/temp/Temp'

// import React from 'react'

function App() {
  const promise = new Promise(resolve => {
    resolve('🚀')
  })
  const result = await promise
  console.log(result)

  return (
    <div>
      <p className="bold App">Lorem ipsum dolor sit</p>
      <Temp />
    </div>
  )
}

export default App
