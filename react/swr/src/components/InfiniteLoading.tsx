import useNews from 'hooks/useNews'
import { useLayoutEffect, useState } from 'react'
import useSWR from 'swr'
import { List, News } from 'types/news'

import NewsList from './NewsList'

const fetcher = async (url: string) => fetch(url).then(response => response.json())

function InfiniteLoading() {
  const [count, setCount] = useState(296)
  const [newsList, setNewsList] = useState<List[]>([])

  const { data } = useSWR<News>(`/channel/rightbar?officeId=${count}`, fetcher)
  const news = useNews(data)

  useLayoutEffect(() => {
    setNewsList(prevState => [...prevState, ...news])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [news])

  return (
    <div>
      <NewsList heading="InfiniteLoading" newsList={newsList} />
      <button type="button" className="mt-4 text-xl" onClick={() => setCount(count + 1)}>
        Load More
      </button>
    </div>
  )
}

export default InfiniteLoading
