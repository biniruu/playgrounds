import { useState } from 'react'
import useSWR from 'swr'

import type { User } from '../types/user'

import NewsList from './NewsList'

const fetcher = async (url: string) => fetch(url).then(response => response.json())

function Pagenation() {
  const [pageIdx, setPageIdx] = useState(2)
  const { data } = useSWR<User>(`https://reqres.in/api/users/${pageIdx}`, fetcher)
  const { data: nextPage } = useSWR<User>(`https://reqres.in/api/users/${pageIdx + 1}`, fetcher)

  return (
    <>
      <NewsList heading="Pagenation" data={data} />
      <div className="hidden">
        <NewsList heading="Pagenation" data={nextPage} />
      </div>
      <div className="flex justify-center mt-4">
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

export default Pagenation
