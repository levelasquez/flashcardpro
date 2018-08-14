import rootReducer from './index'
import * as actions from '../actions'
import { stack, stacks } from '../data/fixtures'

describe('reducers', () => {
  test('returns the initial state', () => {
    const state = rootReducer({}, {})

    expect(state).toEqual({ stack: {}, stacks: [] })
  })

  test('sets the main stack', () => {
    const state = rootReducer({}, {
      type: actions.SET_STACK,
      stack,
    })

    expect(state).toEqual({ stack, stacks: [] })
  })

  test('load stacks', () => {
    const state = rootReducer({}, {
      type: actions.LOAD_STACKS,
      stacks,
    })

    expect(state).toEqual({ stack: {}, stacks })
  })

  test('add an stack', () => {
    const testStack = {
      title: 'data',
      cards: [],
    }
    const state = rootReducer({}, {
      type: actions.ADD_STACK,
      stack: testStack,
    })

    expect(state).toEqual({ stack: {}, stacks: [{ ...testStack, id: 0 }] })
  })
})
