import { useQuery } from '@tanstack/react-query'

import { fetchComments } from './api'

import type { Post } from 'types'

interface Props {
  post: Post
}

function PostDetail({ post }: Props) {
  const { title, body, id } = post

  const options = {
    queryKey: ['comments', id],
    queryFn: () => fetchComments(String(id)),
    staleTime: 2000,
  }

  const { data } = useQuery(options)

  return (
    <>
      <h3 style={{ color: 'blue' }}>{title}</h3>
      <button>Delete</button>
      <button>Update title</button>
      <p>{body}</p>
      <h4>Comments</h4>
      {data?.map(comment => {
        const { id, email, body } = comment

        return (
          <li key={id}>
            {email}: {body}
          </li>
        )
      })}
    </>
  )
}

export default PostDetail
