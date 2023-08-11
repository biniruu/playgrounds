import useSWR from 'swr'

import { News } from '../types/news.d'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetchWithToken = (url: string, token: string) => fetch(url).then(res => res.json())

function MultipleArguments() {
  const { data } = useSWR<News>(['/channel/rightbar?officeId=296', '🍎'], ([url, token]: [string, string]) =>
    fetchWithToken(url, token),
  )

  return (
    <>
      <h1 className="text-4xl mb-7 font-bold">MultipleArguments</h1>
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

export default MultipleArguments
