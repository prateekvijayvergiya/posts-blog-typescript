import React from 'react'
import post from '../../../types/post'
import PostItem from './listItem'

type postListPropsType = {
  data: post[]
}

const PostList: React.FC<postListPropsType> = ({ data }: postListPropsType) => {
  console.log(data)
  return (
    <>
      {data.map((item: post, index) => (
        <PostItem key={index} {...item}/>
      ))}
    </>
  )
}

export default PostList
