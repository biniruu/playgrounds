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
  return fetch(url).then(response => response.json())
}

function RefreshInterval() {
  const { data } = useSWR<News>('/channel/rightbar?officeId=296', fetcher, { refreshInterval: 1000 })

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
