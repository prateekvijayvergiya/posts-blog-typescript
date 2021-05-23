import React from 'react'
import { Route, Switch } from 'react-router-dom'
import UserProfile from '../components/userProfile'
import Home from './../components/home/index'
import AppRouteStyled from './styles'

const Routes: React.FC = () => {
  return (
    <AppRouteStyled>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:id" component={UserProfile} />
      </Switch>
    </AppRouteStyled>
  )
}

export default Routes
