import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import post from './../../types/post'
import {
  selectPosts,
  selectIsLoading,
  getPosts,
} from './../../../app/store/reducers/posts'

const Home: React.FC = () => {
  const posts: post[] = useSelector(selectPosts)
  const isLoading: boolean = useSelector(selectIsLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [getPosts])

  console.log(posts)
  return isLoading ? <h1>Loading</h1> : <h1>Hello</h1>
}

export default Home
