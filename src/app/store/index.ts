import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducers/posts'
import userDataReducer from './reducers/userData'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    userData: userDataReducer,
  },
})

export{ store }
