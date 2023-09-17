import type { Metadata } from 'next'
import Link from 'next/link'
import { ReactNode } from 'react'

import type { Data } from './api/route'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web Tutorial',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const response = await fetch('http://localhost:3000/api').then(response => response.json() as Promise<{ data: Data }>)
  const topics = response.data.topics

  return (
    <html lang="en">
      <body className="p-8">
        <h1 className="uppercase mb-8">
          <Link href="/">web</Link>
        </h1>
        <ul className="mb-8">
          {topics.map(topic => {
            return (
              <li key={topic.id} className="mb-4">
                <h2>{topic.title}</h2>
                <p>{topic.body}</p>
              </li>
            )
          })}
        </ul>
        {children}
      </body>
    </html>
  )
}