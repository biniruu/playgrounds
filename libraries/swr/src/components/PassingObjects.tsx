'use client'

import useSWR from 'swr'

import NewsList from './NewsList'

import useNews from 'hooks/useNews'
import { News } from 'types/news'

interface User {
  data: {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
  }
  support: {
    url: string
    text: string
  }
}

const fetching = (url: string) => fetch(url).then(response => response.json())

const fetchWithUser = (url: string, id: number) => {
  // I know that this variable seems unusual, but it's a simple way for me to conduct testing
  const uri = url && `/channel/rightbar?officeId=${id}96`
  return fetch(uri).then(response => response.json())
}

function PassingObjects() {
  const { data: user } = useSWR<User>('https://reqres.in/api/users/2', fetching)
  const { data } = useSWR<News>(
    // user.data.id === 2
    user?.data.id ? ['/channel/rightbar?officeId=296', user.data.id] : null,
    ([url, id]: [string, number]) => fetchWithUser(url, id),
  )

  const news = useNews(data)

  return <NewsList heading="PassingObjects" news={news} />
}

export default PassingObjects
