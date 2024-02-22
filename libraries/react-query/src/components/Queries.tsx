import { useQuery } from '@tanstack/react-query'
import { User } from 'types/user'

const fetchUser = () => fetch('https://reqres.in/api/users/2').then(res => res.json())

function Queries() {
  // FIXME: useQuery doesn't fetch data
  const { data } = useQuery<User>({ queryKey: ['user'], queryFn: fetchUser })

  return (
    <>
      <h1 className="text-4xl font-bold mt-4">Queries</h1>
      <p className="mt-8">{data?.data.email || 'no data'}</p>
    </>
  )
}

export default Queries
