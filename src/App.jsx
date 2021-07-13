import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { LoginCallback, Home, Search, Artist } from 'views'
import { PrivateRoute } from 'components'

import './App.module.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login/callback" component={LoginCallback} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/artista/:id" component={Artist} />
      <PrivateRoute path="/busca" component={Search} />
    </Switch>
  </BrowserRouter>
)

export default App
