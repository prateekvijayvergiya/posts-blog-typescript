import React from 'react'
import Grid from '@material-ui/core/Grid'
import post from '../../../types/post'
import PostItem from './listItem'

type postListPropsType = {
  data: post[]
}

const PostList: React.FC<postListPropsType> = ({ data }: postListPropsType) => {
  console.log(data)
  return (
    <Grid container spacing={5} justify="space-evenly">
      {data.map((item: post, index) => (
        <Grid item xs={6} lg={3} md={4}key={index}>
          <PostItem {...item}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default PostList
