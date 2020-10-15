import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Context } from './Context/AuthContext'

import About from './pages/about'
import Login from './pages/login'
import Main from './pages/main'

function CustonRoutes({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context)

  if (loading) {
    return <h1>Carregando...</h1>
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />
}

function Routes() {
  return (
    <Switch>
      <CustonRoutes path="/" exact component={Main} />
      <CustonRoutes path="/login" component={Login} />
      <CustonRoutes path="/about" component={About} />
    </Switch>
  )
}

export default Routes
