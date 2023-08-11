import useSWR from 'swr'

import type { News } from '../types/news.d'

import NewsList from './NewsList'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetchWithToken = (url: string, token: string) => fetch(url).then(res => res.json())

function RefreshIntervalWithMultipleArguments() {
  const { data } = useSWR<News>(
    ['/channel/rightbar?officeId=296', '🍌'],
    ([url, token]: [string, string]) => fetchWithToken(url, token),
    { refreshInterval: 3000 },
  )

  return <NewsList heading="RefreshIntervalWithMultipleArguments" data={data} />
}

export default RefreshIntervalWithMultipleArguments
