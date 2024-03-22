import useSWR from 'swr'

import type { News } from '../types/news'

import NewsList from './NewsList'

import useNews from 'hooks/useNews'

const fetcher = (url: string) => fetch(url).then(res => res.json())

function SWR() {
  const { data } = useSWR<News>('/channel/rightbar?officeId=296', fetcher)
  const news = useNews(data)

  return <NewsList heading="SWR" news={news} />
}

export default SWR
