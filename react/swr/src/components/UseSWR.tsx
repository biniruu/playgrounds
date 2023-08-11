import useSWR from 'swr'

interface List {
  thumb: string
  name: string
  url: string
}

interface News {
  result: {
    type: 'News'
    press: {
      count: number
      list: List[] | []
    }
    journalist: {
      count: number
      list: List[] | []
    }
    otherPressList: {
      list: List[] | []
    }
    premium: {
      count: number
      list: List[] | []
    }
    premiumContent: {
      count: number
      list: List[] | []
    }
    series: {
      count: number
      list: List[] | []
    }
    pressSettingUrl: string
    journalistSettingUrl: string
    premiumSubscribedUrl: string
    seriesSettingUrl: string
  }
}

const fetcher = (url: string) => {
  // eslint-disable-next-line no-console
  console.log('fetcher in useSWR fired🔥')
  return fetch(url).then(res => res.json())
}

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
