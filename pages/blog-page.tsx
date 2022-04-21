import {  GetStaticProps } from 'next'
import React from 'react'
import { Layout } from '../components/Layout'
import Post from '../components/Post'
import { getAllPostsData } from '../lib/fetch'
import { POST } from '../types/Types'

interface PROPS {
  posts:POST[]
}

const BlogPage :React.FC<PROPS>= ({ posts }) => {
  console.log({ posts })
  return (
    <Layout title="Blog">
      <p className="text-4xl">
        BlogPage
      </p>
      <ul>
        {posts && posts.map((post) => {
          return (
            <Post {...post} key={post.id} />)
        })}
      </ul>
    </Layout>
  )
}
export default BlogPage

export const getStaticProps :GetStaticProps= async () => {
  const posts: POST[] = await getAllPostsData()
  return {
    props: { posts }
  }

}
