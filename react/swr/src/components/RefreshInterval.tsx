import useSWR from 'swr'

import type { News } from '../types/news.d'

const fetcher = (url: string) => {
  return fetch(url).then(response => response.json())
}

function RefreshInterval() {
  const { data } = useSWR<News>('/channel/rightbar?officeId=296', fetcher, { refreshInterval: 3000 })

  return (
    <>
      <h1 className="text-4xl mb-7 font-bold">RefreshInterval</h1>
      <ul>
        {data?.result.premiumContent.list.length &&
          data?.result.premiumContent.list.map(item => (
            <li key={item.name} className="text-lg mb-4">
              {item.name}
            </li>
          ))}
      </ul>
    </>
  )
}

export default RefreshInterval
