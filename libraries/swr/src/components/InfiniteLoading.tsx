'use client'

import { useState } from 'react'
import useSWR from 'swr'

import NewsList from './NewsList'

import useNews from 'hooks/useNews'
import { News } from 'types/news'

const fetcher = (url: string) => fetch(url).then(response => response.json())

function InfiniteLoading() {
  const [count, setCount] = useState(296)

  const { data } = useSWR<News>(`/channel/rightbar?officeId=${count}`, fetcher)
  const news = useNews(data)

  return (
    <div>
      <NewsList heading="InfiniteLoading" newsList={news} />
      <button type="button" className="mt-4 text-xl" onClick={() => setCount(count + 1)}>
        Load More
      </button>
    </div>
  )
}

export default InfiniteLoading
