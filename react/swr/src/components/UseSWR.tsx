import useSWR from 'swr'

import type { News } from '../types/news.d'

const fetcher = (url: string) => fetch(url).then(res => res.json())

function SWR() {
  const { data } = useSWR<News>('/channel/rightbar?officeId=296', fetcher)

  return (
    <>
      <h1 className="text-4xl mb-7 font-bold">SWR</h1>
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

export default SWR
