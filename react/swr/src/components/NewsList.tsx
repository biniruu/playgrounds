import type { List } from 'types/news'

interface Props {
  news?: List[]
  user?: string
  userList?: string[]
  heading: string
}

function NewsList({ user, news, heading, userList }: Props) {
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
        {userList?.map(item => (
          <li key={item} className="text-lg mb-4">
            {item}
          </li>
        )) || null}
      </ul>
    </>
  )
}

export default NewsList
