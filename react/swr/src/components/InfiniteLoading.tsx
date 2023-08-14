import { useLayoutEffect, useState } from 'react'
import useSWR from 'swr'
import { User } from 'types/user'

import NewsList from './NewsList'

const fetcher = async (url: string) => fetch(url).then(response => response.json())

function InfiniteLoading() {
  const [count, setCount] = useState(1)
  const [userList, setUserList] = useState<string[]>([])

  const { data } = useSWR<User>(`https://reqres.in/api/users/${count}`, fetcher)

  useLayoutEffect(() => {
    const user = data?.data.email
    if (user) {
      setUserList(prevState => [...prevState, user])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div>
      <NewsList heading="InfiniteLoading" userList={userList} />
      <button type="button" className="mt-4 text-xl" onClick={() => setCount(count + 1)}>
        Load More
      </button>
    </div>
  )
}

export default InfiniteLoading
