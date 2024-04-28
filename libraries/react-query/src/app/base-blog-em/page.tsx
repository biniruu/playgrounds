'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { deletePost, fetchPosts, updatePost } from './api'
import PostDetail from './postDetail'
import styles from './posts.module.css'

import type { Post } from 'types'

const maxPostPage = 10

const initValue = {
  userId: 0,
  id: 0,
  title: '',
  body: '',
}

function Posts() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPost, setSelectedPost] = useState<Post>(initValue)

  const queryClient = useQueryClient()

  useEffect(() => {
    const lastPage = currentPage >= maxPostPage
    if (!lastPage) {
      const nextPage = currentPage + 1
      const options = {
        queryKey: ['posts', nextPage],
        queryFn: () => fetchPosts(nextPage),
      }
      void queryClient.prefetchQuery(options)
    }
  }, [currentPage, queryClient])

  const deleteMutation = useMutation({ mutationFn: deletePost })
  const updateMutation = useMutation({ mutationFn: updatePost })

  const options = {
    queryKey: ['posts', currentPage],
    queryFn: () => fetchPosts(currentPage),
    staleTime: 2000,
  }
  const { data, isLoading, isError, error } = useQuery(options)

  const onClickPost = (post: Post) => {
    deleteMutation.reset()
    updateMutation.reset()
    setSelectedPost(post)
  }

  if (isLoading) {
    return <h3>Loading...</h3>
  }

  if (isError) {
    return (
      <>
        <h3>Something went wrong</h3>
        <p>{error.toString()}</p>
      </>
    )
  }

  return (
    <>
      <ul>
        {data?.map(post => {
          const { id, title } = post

          return (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
            <li key={id} className={styles['post-title']} onClick={() => onClickPost(post)}>
              {title}
            </li>
          )
        })}
      </ul>
      <div className={styles['pages']}>
        <button disabled={currentPage <= 1} onClick={() => setCurrentPage(currentPage => currentPage - 1)}>
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button disabled={currentPage >= maxPostPage} onClick={() => setCurrentPage(currentPage => currentPage + 1)}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && (
        <PostDetail post={selectedPost} deleteMutation={deleteMutation} updateMutation={updateMutation} />
      )}
    </>
  )
}

export default Posts
