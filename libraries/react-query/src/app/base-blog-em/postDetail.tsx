import type { Post } from 'types'

interface Props {
  post: Post
}

function PostDetail({ post }: Props) {
  const { title, body } = post
  // replace with useQuery
  const data = []

  return (
    <>
      <h3 style={{ color: 'blue' }}>{title}</h3>
      <button>Delete</button>
      <button>Update title</button>
      <p>{body}</p>
      <h4>Comments</h4>
      {data?.map(comment => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  )
}

export default PostDetail
