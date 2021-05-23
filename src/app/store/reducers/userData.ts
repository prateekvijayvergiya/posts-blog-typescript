import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import userType from '../../../features/types/user'

const BASE_URL = 'https://dummyapi.io/data/api/user/'
const APP_ID = '5f730c499b5ce2eee9e098bb'

type initialStateType = {
  user: userType
  isLoading: boolean
}

const initialState: initialStateType = {
  user: {},
  isLoading: true,
}

export const getUser = createAsyncThunk('posts/search', async (id: string) => {
  const userData = await axios
    .get(`${BASE_URL}${id}`, { headers: { 'app-id': APP_ID } })
    .then(({data}) => {
      return data
    })

  return userData
})

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
      })
  },
})

export const selectUser = (state: any) => state.userData.user
export const selectIsLoading = (state: any) => state.userData.isLoading

export default userDataSlice.reducer
