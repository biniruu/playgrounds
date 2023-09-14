'use client'

import Link from 'next/link'
import { useLayoutEffect, useState } from 'react'

import { Data } from '@/app/api/route'

function ReadList() {
  const [topics, setTopics] = useState<Data['topics']>([])

  useLayoutEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:3000/api')
      const response = (await data.json()) as { data: Data }
      const result = response.data.topics
      setTopics(result)
    }
    void fetchData()
  })

  return (
    <>
      {topics.map(topic => {
        return (
          <li key={topic.id}>
            <Link href={`/read/${topic.id}`} className="underline">
              {topic.title}
            </Link>
          </li>
        )
      })}
    </>
  )
}

export default ReadList
