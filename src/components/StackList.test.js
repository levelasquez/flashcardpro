import React from 'react'
import { shallow } from 'enzyme'
import { StackList } from './StackList'
import { stacks } from '../data/fixtures'

const props = { stacks }

describe('StackList component', () => {
  const stackList = shallow(<StackList {...props} />)

  test('rendesr the correct number of links', () => {
    const links = stackList.find('Link').length

    expect(links).toEqual(props.stacks.length)
  })
})