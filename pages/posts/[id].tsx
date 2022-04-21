import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import { Layout } from '../../components/Layout'
import { getAllPostsId, getPostData } from '../../lib/fetch'
import { POST } from '../../types/Types'

const Post :React.FC<POST>= ({ id, title, body }) => {

  return (
    <Layout title={title}>
      <p className='m-4'>{`ID : `}{id}</p>
      <p className='mb-4 text-xl font-bold'>{title}</p>
      <p className='mx-10 mb-12'>{body}</p>
      <div className='flex cursor-pointer mt-12'>
        <Link href="/blog-page"><a data-testid="back-blog">Back to blog-page</a></Link>
        </div>
    </Layout>
  )
}

export default Post

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostData(params.id as string)
  console.log({ post})
  return {
    props:
      {... post }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostsId()
  return {
    paths,
    fallback: false
  }

}