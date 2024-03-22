import { useLayoutEffect, useState } from 'react'

import { News } from 'types/news'

const initialStateOfNews = [
  {
    thumb: '',
    name: '',
    url: '',
  },
]

function useNews(data: News | undefined) {
  const [news, setNews] = useState(initialStateOfNews)

  useLayoutEffect(() => {
    if (data?.result) {
      setNews(data.result.premiumContent.list)
    }
  }, [data])

  return news
}

export default useNews
