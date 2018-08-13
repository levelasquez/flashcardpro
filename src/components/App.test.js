import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App component', () => {
  const app = shallow(<App />)

  test('renders the title', () => {
    const title = app.find('h2').text()

    expect(title).toEqual('Flashcard Pro')
  })

  test('renders the StackList', () => {
    const stackList = app.find('Connect(StackList)').exists()

    expect(stackList).toBe(true)
  })

  test('renders a link to create new stacks', () => {
    const linkText = app.find('Link h4').text()

    expect(linkText).toEqual('Create a New Stack')
  })
})
