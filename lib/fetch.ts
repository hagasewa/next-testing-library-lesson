import fetch from 'node-fetch'
import { POST, TASK } from '../types/Types'

export const getAllPostsData = async () => {
  const postsURL = "https://jsonplaceholder.typicode.com/posts/?_limit=10"
  const res = await fetch(postsURL)
  const posts:POST[] = await res.json() as any
  return posts
}

export const getAllTaskData = async () => {
  const todosURL = "https://jsonplaceholder.typicode.com/todos/?_limit=10"
  const res = await fetch(todosURL)
  const todos:TASK[] = await res.json() as any
  return todos
}

export const getAllPostsId = async () => {
  const postsURL =  "https://jsonplaceholder.typicode.com/posts/?_limit=10"
  const res = await fetch(postsURL)
  const posts: POST[] = await res.json() as any
  const ids = posts.map((post) => {
    return {
      params:
      {
        id: String(post.id)
      }
    }
  })
  return ids
}

export const getPostData = async (id: string) => {
  const postURL =  `https://jsonplaceholder.typicode.com/posts/${id}`
  const res = await fetch(postURL)
  const post: POST = await res.json() as any
  return post
}