'use client'

import { useRouter } from 'next/navigation'
import { SyntheticEvent } from 'react'

import { Data } from '../api/route'

interface ResponseData {
  data: Data
  status: number
}

interface FormValue {
  value: string
}

interface FormTargetData {
  title: FormValue
  body: FormValue
}

function Create() {
  const router = useRouter()
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & FormTargetData
    const title = target.title.value
    const body = target.body.value
    const options = {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    }

    fetch('http://localhost:3000/api', options)
      .then(response => response.json())
      .then((result: ResponseData) => {
        // eslint-disable-next-line no-console
        console.log(result.status)
        const lastId = result.data.topics.at(-1)?.id
        router.push(`/read/${lastId}`)
      })
      .catch(error => console.error(error))
  }

  return (
    <section className="mb-6">
      <h2 className="text-4xl mb-4">Create</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="title" className="mb-3 border border-slate-900" placeholder="title" />
        </div>
        <div>
          <textarea name="body" className="mb-2 border border-slate-900" placeholder="body"></textarea>
        </div>
        <div>
          <input type="submit" className="border border-slate-900 px-2 cursor-pointer" value="create" />
        </div>
      </form>
    </section>
  )
}

export default Create
