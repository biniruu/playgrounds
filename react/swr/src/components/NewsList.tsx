import { useLayoutEffect, useState } from 'react'
import type { List, News } from 'types/news'
import { User } from 'types/user'

interface Props {
  data?: News | User
  heading: string
}

const initialStateOfNews = [
  {
    thumb: '',
    name: '',
    url: '',
  },
]

function NewsList({ data, heading }: Props) {
  const [news, setNews] = useState(initialStateOfNews)
  const [user, setUser] = useState('')

  useLayoutEffect(() => {
    if (data && 'result' in data) {
      setNews(data.result.premiumContent.list as List[])
      return
    }
    setUser(data?.data.email as string)
  }, [data])

  return (
    <>
      <h1 className="text-4xl mb-7 font-bold">{heading}</h1>
      <ul>
        {news?.map(item => (
          <li key={item.name} className="text-lg mb-4">
            {item.name}
          </li>
        )) || null}
        {user || null}
      </ul>
    </>
  )
}

export default NewsList
