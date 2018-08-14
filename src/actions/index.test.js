import * as actions from './index'
import { stack, stacks } from '../data/fixtures'

describe('actions', () => {
  test('creates an action to set the main stack', () => {
    const action = actions.setStack(stack)
    const expectedAction = {
      type: actions.SET_STACK,
      stack,
    }

    expect(action).toEqual(expectedAction)
  })

  test('creates an action to load the stacks', () => {
    const action = actions.loadStacks(stacks)
    const expectedAction = {
      type: actions.LOAD_STACKS,
      stacks,
    }

    expect(action).toEqual(expectedAction)
  })

  test('creates an action to add a stack', () => {
    const action = actions.addStack(stack)
    const expectedAction = {
      type: actions.ADD_STACK,
      stack,
    }

    expect(action).toEqual(expectedAction)
  })
})
