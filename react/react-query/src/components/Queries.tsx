import { useQuery } from '@tanstack/react-query'
import { User } from 'types/user'

const fetchUser = () => fetch('https://reqres.in/api/users/2').then(res => res.json())

function Queries() {
  // FIXME: useQuery doesn't fetch data
  const { data } = useQuery<User>({ queryKey: ['user'], queryFn: fetchUser })

  return (
    <>
      <h1>Queries</h1>
      <p>{data?.data.email || 'no data'}</p>
    </>
  )
}

export default Queries
