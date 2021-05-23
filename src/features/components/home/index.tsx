import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import post from './../../types/post'
import {
  selectPosts,
  selectIsLoading,
  getPosts,
} from './../../../app/store/reducers/posts'
import PostList from './list'

type postDataType = {
  data: post[]
}

const Home: React.FC = () => {
  const posts: postDataType = useSelector(selectPosts)
  const isLoading: boolean = useSelector(selectIsLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('running effect')
    dispatch(getPosts())
  }, [dispatch])

  console.log(posts)
  return isLoading ? <CircularProgress/> : <PostList {...posts}/>
}

export default Home
