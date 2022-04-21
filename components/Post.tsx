import Link from 'next/link'
import React from 'react'
import { POST } from '../types/Types'

const Post :React.FC<POST>= ({id,title}) => {
  return (
    <div><li>
      <span>{id}</span>{' : '}
      <Link href={`/posts/${id}`}>
        <a className='cursor-pointer border-b border-gray-500 hover:bg-gray-300'>{title}</a></Link></li>
    </div>
  )
}

export default Post