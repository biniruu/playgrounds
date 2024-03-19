'use client'

import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { fetchPosts } from './api'
import PostDetail from './postDetail'
import styles from './posts.module.css'

import type { Post } from 'types'

const maxPostPage = 10

const initValue = {
  id: 0,
  title: '',
  body: '',
  userId: 0,
}

function Posts() {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedPost, setSelectedPost] = useState<Post>(initValue)

  const options = {
    queryKey: ['posts', currentPage],
    queryFn: () => fetchPosts(currentPage),
  }

  const { data, isLoading, isError, error } = useQuery(options)

  return (
    <>
      <ul>
        {isError && <div>{error.toString()}</div>}
        {isLoading && <div>🙀</div>}
        {data?.map(post => {
          const { id, title } = post

          return (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
            <li key={id} className={styles['post-title']} onClick={() => setSelectedPost(post)}>
              {title}
            </li>
          )
        })}
      </ul>
      <div className={styles['pages']}>
        <button disabled onClick={() => {}}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled onClick={() => {}}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  )
}

export default Posts
