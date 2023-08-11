import type { News } from 'types/news'

interface Props {
  data?: News
  heading: string
}

function NewsList({ data, heading }: Props) {
  return (
    <>
      <h1 className="text-4xl mb-7 font-bold">{heading}</h1>
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

export default NewsList
