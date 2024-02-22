/* eslint-disable @typescript-eslint/require-await */
import { NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/require-await
const data = {
  topics: [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
  ],
}

export type Data = typeof data

export const GET = async () => NextResponse.json({ data, status: 200 })

interface ReqVal {
  title: string
  body: string
}

export const POST = async (request: Request) => {
  const { title, body } = (await request.json()) as ReqVal
  const topics = data.topics
  topics.push({ id: topics.length + 1, title, body })
  return NextResponse.json({ data, status: 200 })
}
