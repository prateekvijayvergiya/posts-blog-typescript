import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import post from './../../../features/types/post'

const BASE_URL = 'https://dummyapi.io/data/api'
const APP_ID = '5f730c499b5ce2eee9e098bb'

type initialStateType = {
  posts: post[]
  isLoading: boolean
}

const initialState: initialStateType = {
  posts: [],
  isLoading: false,
}

export const getPosts = createAsyncThunk('posts/search', async () => {
  const posts = await axios
    .get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
    .then(({ data }) => {
      return data
    })

  return posts
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.posts = action.payload
      })
  },
})

export const selectPosts = (state: any) => state.posts.posts
export const selectIsLoading = (state: any) => state.posts.isLoading

export default postsSlice.reducer
