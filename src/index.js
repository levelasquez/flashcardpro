import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import rootReducer from './reducers'
import App from './components/App'
import Stack from './components/Stack'

const store = createStore(rootReducer)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/stack' component={Stack} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
