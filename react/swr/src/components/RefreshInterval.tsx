import useSWR from 'swr'

interface Resource {
  data: {
    id: number
    name: string
    year: number
    color: string
    pantone_value: string
  }
  support: {
    url: string
    text: string
  }
}

const fetcher = (url: string) => {
  // eslint-disable-next-line no-console
  console.log('fetcher in RefreshInterval fired🔥')
  return fetch(url).then(response => response.json())
}

function RefreshInterval() {
  const { data } = useSWR<Resource>('https://reqres.in/api/unknown/2', fetcher, { refreshInterval: 1000 })

  return (
    <>
      <h1>RefreshInterval</h1>
      <div>{data?.data.pantone_value}</div>
    </>
  )
}

export default RefreshInterval
