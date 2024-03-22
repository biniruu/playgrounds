import useSWR from 'swr'

import { News } from '../types/news'

import NewsList from './NewsList'

import useNews from 'hooks/useNews'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetchWithToken = (url: string, token: string) => fetch(url).then(res => res.json())

function MultipleArguments() {
  const { data } = useSWR<News>(['/channel/rightbar?officeId=296', '🍎'], ([url, token]: [string, string]) =>
    fetchWithToken(url, token),
  )
  const news = useNews(data)

  return <NewsList heading="MultipleArguments" news={news} />
}

export default MultipleArguments
