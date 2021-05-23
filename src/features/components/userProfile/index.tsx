import { CircularProgress } from '@material-ui/core';
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsLoading, selectUser, getUser } from './../../../app/store/reducers/userData';

interface UserProps {
  match: {
    params: {
      id: string,
    }
  }
}

const UserProfile: React.FC<UserProps> = ({match: {params: {id}}}: UserProps) => {
  const userData = useSelector(selectUser)
  const isLoading: boolean = useSelector(selectIsLoading)
  const dispatch = useDispatch()
  console.log(userData)
  useEffect(() => {
    dispatch(getUser(id))
  },[dispatch])
  return isLoading ? <CircularProgress/> : <h1>I am user profile</h1>
} 

export default UserProfile