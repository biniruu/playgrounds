import useSWR from 'swr'

interface User {
  data: {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
  }
  support: {
    url: string
    text: string
  }
}

const fetcher = (url: string) => {
  // eslint-disable-next-line no-console
  console.log('fetcher in useSWR fired🔥')
  return fetch(url).then(res => res.json())
}

function SWR() {
  const { data } = useSWR<User>('https://reqres.in/api/users/2', fetcher)

  return (
    <>
      <h1>SWR</h1>
      <div>{data?.data.email}</div>
    </>
  )
}

export default SWR
