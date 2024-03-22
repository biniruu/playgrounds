import type { List } from 'types/news'

interface Props {
  news?: List[]
  user?: string
  newsList?: List[]
  heading: string
}

function NewsList({ user, news, heading, newsList }: Props) {
  return (
    <>
      <h1 className="mb-7 text-4xl font-bold">{heading}</h1>
      <ul>
        {user || null}
        {news?.map(item => (
          <li key={item.name} className="mb-4 text-lg">
            {item.name}
          </li>
        )) || null}
        {newsList?.map((item, idx) => (
          <li key={`${item.name}${idx}`} className="mb-4 text-lg">
            {item.name}
          </li>
        )) || null}
      </ul>
    </>
  )
}

export default NewsList
