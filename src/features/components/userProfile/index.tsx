import { CircularProgress } from '@material-ui/core';
import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsLoading, getUser } from './../../../app/store/reducers/userData';

interface UserProps {
  match: {
    params: {
      id: string,
    }
  }
}

const UserProfile: React.FC<UserProps> = ({match: {params: {id}}}: UserProps) => {
  const isLoading: boolean = useSelector(selectIsLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser(id))
  },[dispatch, id])
  return isLoading ? <CircularProgress/> : <h1>I am user profile</h1>
} 

export default UserProfile