'use client'

import { useLayoutEffect, useState } from 'react'
import useSWR from 'swr'

import type { User } from '../types/user'

import NewsList from './NewsList'

const fetcher = (url: string) => fetch(url).then(response => response.json())

function Pagination() {
  const [pageIdx, setPageIdx] = useState(2)
  const [user, setUser] = useState('')
  const [nextUser, setNextUser] = useState('')

  const { data } = useSWR<User>(`https://reqres.in/api/users/${pageIdx}`, fetcher)
  const { data: nextPage } = useSWR<User>(`https://reqres.in/api/users/${pageIdx + 1}`, fetcher)

  useLayoutEffect(() => {
    setUser(data?.data.email as string)
    setNextUser(nextPage?.data.email as string)
  }, [data, nextPage])

  return (
    <>
      <NewsList heading="Pagination" user={user} />
      <div className="hidden">
        <NewsList heading="Pagination" user={nextUser} />
      </div>
      <div className="mt-4 flex justify-center">
        <button type="button" className="px-4" onClick={() => setPageIdx(pageIdx - 1)}>
          Prev
        </button>
        <button type="button" className="px-4" onClick={() => setPageIdx(pageIdx + 1)}>
          Next
        </button>
      </div>
    </>
  )
}

export default Pagination
