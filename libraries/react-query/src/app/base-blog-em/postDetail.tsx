import type { UseMutationResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

import { fetchComments } from './api'
import styles from './postDetail.module.css'

import type { Post } from 'types'

interface Props {
  post: Post
  deleteMutation: UseMutationResult<string, Error, string, unknown>
  updateMutation: UseMutationResult<string, Error, string, unknown>
}

function PostDetail({ post, deleteMutation, updateMutation }: Props) {
  const { title, body, id } = post

  const options = {
    queryKey: ['comments', id],
    queryFn: () => fetchComments(String(id)),
    staleTime: 2000,
  }

  const { data, isError, error, isLoading } = useQuery(options)

  if (isLoading) {
    return <h3>Loading...</h3>
  }

  if (isError) {
    return (
      <>
        <h3>Error</h3>
        <p>{error.toString()}</p>
      </>
    )
  }

  return (
    <>
      <h3 style={{ color: 'blue' }}>{title}</h3>
      <button
        className="my-2 block rounded-none border border-solid bg-white px-2 py-1"
        onClick={() => deleteMutation.mutate(String(id))}
      >
        Delete
      </button>
      {deleteMutation.isPending && <p className={styles.loading}>Deleting the post</p>}
      {deleteMutation.isError && (
        <p className={styles.error}>Error deleting the post: {deleteMutation.error.toString()}</p>
      )}
      {deleteMutation.isSuccess && <p className={styles.success}>Post was (not) deleted</p>}
      <button className="my-2 block rounded-none border border-solid bg-white px-2 py-1">Update title</button>
      {updateMutation.isPending && <p className={styles.loading}>Updating the post</p>}
      {updateMutation.isError && (
        <p className={styles.error}>Error updating the post: {updateMutation.error.toString()}</p>
      )}
      {updateMutation.isSuccess && <p className={styles.success}>Post was (not) updated</p>}
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
