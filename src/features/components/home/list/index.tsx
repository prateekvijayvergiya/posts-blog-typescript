import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import post from '../../../types/post'
import PostItem from './listItem'
import { selectPosts } from './../../../../app/store/reducers/posts';

const PostList: React.FC = () => {
  const posts = useSelector(selectPosts)
  return (
    <Grid container spacing={5} justify="space-evenly">
      {posts.data.map((item: post, index: number) => (
        <Grid item xs={6} lg={3} md={4}key={index}>
          <PostItem {...item}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default PostList
