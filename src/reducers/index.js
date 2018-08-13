import { combineReducers } from 'redux'
import { SET_STACK, LOAD_STACKS } from '../actions'

const stack = (state = {}, action) => {
  switch (action.type) {
    case SET_STACK:
      return action.stack
    default:
      return state
  }
}

const stacks = (state = [], action) => {
  switch (action.type) {
    case LOAD_STACKS:
      return action.stacks
    default:
      return state
  }
}

const reducers = combineReducers({
  stack,
  stacks,
})

export default reducers
