import { useLayoutEffect, useState } from 'react'
import useSWR from 'swr'

import { News } from '../types/news'

import NewsList from './NewsList'

const initialStateOfNews = [
  {
    thumb: '',
    name: '',
    url: '',
  },
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetchWithToken = (url: string, token: string) => fetch(url).then(res => res.json())

function MultipleArguments() {
  const [news, setNews] = useState(initialStateOfNews)

  const { data } = useSWR<News>(['/channel/rightbar?officeId=296', '🍎'], ([url, token]: [string, string]) =>
    fetchWithToken(url, token),
  )

  useLayoutEffect(() => {
    if (data?.result) {
      setNews(data?.result.premiumContent.list)
    }
  }, [data])

  return <NewsList heading="MultipleArguments" news={news} />
}

export default MultipleArguments
