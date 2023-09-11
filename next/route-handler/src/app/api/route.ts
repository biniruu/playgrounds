import { NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/require-await
const data = {
  topics: [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
  ],
}

export type Data = typeof data

// eslint-disable-next-line @typescript-eslint/require-await
export const GET = async () => NextResponse.json({ data })

interface ReqVal {
  title: string
  body: string
}

export const POST = async (request: Request) => {
  const { title, body } = (await request.json()) as ReqVal
  const topics = data.topics
  topics.push({ id: topics.length + 1, title, body })
  return NextResponse.json({ data })
}
