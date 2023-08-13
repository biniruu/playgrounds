import type { List } from 'types/news'

interface Props {
  news?: List[]
  user?: string
  heading: string
}

function NewsList({ user, news, heading }: Props) {
  return (
    <>
      <h1 className="text-4xl mb-7 font-bold">{heading}</h1>
      <ul>
        {user || null}
        {news?.map(item => (
          <li key={item.name} className="text-lg mb-4">
            {item.name}
          </li>
        )) || null}
      </ul>
    </>
  )
}

export default NewsList
