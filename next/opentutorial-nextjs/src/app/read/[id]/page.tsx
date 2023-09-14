import { Data } from '@/app/api/route'

interface Props {
  params: { id: string }
}

async function Read({ params }: Props) {
  const index = Number(params.id) - 1
  const response = await fetch('http://localhost:3000/api').then(response => response.json() as Promise<{ data: Data }>)
  const topics = response.data.topics[index]

  return (
    <section className="mb-6">
      <h2 className="text-4xl mb-4">Read {params.id}</h2>
      <h3 className="text-2xl mb-2">{topics.title}</h3>
      <p>{topics.body}</p>
    </section>
  )
}

export default Read
