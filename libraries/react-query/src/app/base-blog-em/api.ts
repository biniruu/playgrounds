export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

const fetchPosts = async (pageNum = 1) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json() as Promise<Post[]>
}

const fetchComments = async (postId: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  return response.json()
}

const deletePost = async (postId: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { method: 'DELETE' })
  return response.json()
}

const updatePost = async (postId: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'PATCH',
    body: JSON.stringify({ title: 'REACT QUERY FOREVER!!!!' }),
  })
  return response.json()
}

export { deletePost, fetchComments, fetchPosts, updatePost }
