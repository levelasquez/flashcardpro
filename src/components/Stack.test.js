import React from 'react'
import { shallow } from 'enzyme'
import { Stack } from './Stack'
import { stack } from '../data/fixtures'

const props = { stack }

describe('Stack component', () => {
  const stack = shallow(<Stack {...props} />)

  test('renders the title', () => {
    const title = stack.find('h3').text()

    expect(title).toEqual(props.stack.title)
  })

  test('renders the link home', () => {
    const linkText = stack.find('h4').text()

    expect(linkText).toEqual('Home')
  })

  test('renders the correct number of cards', () => {
    const number = stack.find('Card').length

    expect(number).toEqual(props.stack.cards.length)
  })
})
