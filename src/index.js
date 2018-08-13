import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import rootReducer from './reducers'
import App from './components/App'
import Stack from './components/Stack'
import StackForm from './components/StackForm'
import './index.css'

const store = createStore(rootReducer)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/stack' component={Stack} />
        <Route path='/stack_form' component={StackForm} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
