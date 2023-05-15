import { NameContext } from 'contexts/NameContext'
import { useContext } from 'react'

function SecondComponent() {
  const { name } = useContext(NameContext)
  return (
    <div>
      <h1 className="mb-4 text-xl">SecondComponent</h1>
      <p>{name}</p>
    </div>
  )
}

export default SecondComponent
