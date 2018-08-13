import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import Stack from './components/Stack'

const app = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/stack' component={Stack} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'))
