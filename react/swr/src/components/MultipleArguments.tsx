import useSWR from 'swr'

import { News } from '../types/news.d'

import NewsList from './NewsList'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetchWithToken = (url: string, token: string) => fetch(url).then(res => res.json())

function MultipleArguments() {
  const { data } = useSWR<News>(['/channel/rightbar?officeId=296', '🍎'], ([url, token]: [string, string]) =>
    fetchWithToken(url, token),
  )

  return <NewsList heading="MultipleArguments" data={data} />
}

export default MultipleArguments
