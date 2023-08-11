import useSWR from 'swr'

import type { News } from '../types/news.d'

import NewsList from './NewsList'

const fetcher = (url: string) => fetch(url).then(response => response.json())

function RefreshInterval() {
  const { data } = useSWR<News>('/channel/rightbar?officeId=296', fetcher, { refreshInterval: 3000 })

  return <NewsList heading="RefreshInterval" data={data} />
}

export default RefreshInterval
