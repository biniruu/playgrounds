import useNews from 'hooks/useNews'
import useSWR from 'swr'

import type { News } from '../types/news.d'

import NewsList from './NewsList'

const fetcher = (url: string) => fetch(url).then(res => res.json())

function SWR() {
  const { data } = useSWR<News>('/channel/rightbar?officeId=296', fetcher)
  const news = useNews(data)

  return <NewsList heading="SWR" news={news} />
}

export default SWR
