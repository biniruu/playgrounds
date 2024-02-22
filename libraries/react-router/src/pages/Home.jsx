import { useOutletContext } from 'react-router-dom'

function Home() {
  const { isLoggedIn } = useOutletContext()

  return (
    <div>
      <h1>Home</h1>
      {!isLoggedIn ? <p>Please login</p> : null}
    </div>
  )
}

export default Home
