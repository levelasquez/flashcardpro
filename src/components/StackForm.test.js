import React from 'react'
import { shallow } from 'enzyme'
import { StackForm } from './StackForm'

describe('StackForm', () => {
  const stackForm = shallow(<StackForm />)

  test('rendesrs the form title', () => {
    const formTitle = stackForm.find('h4').at(1).text()

    expect(formTitle).toEqual('Create a New Stack')
  })

  test('rendesrs a link home', () => {
    const linkHomeText = stackForm.find('h4').at(0).text()

    expect(linkHomeText).toEqual('Home')
  })

  test('renders a Form component', () => {
    const formExists = stackForm.find('Form').exists()

    expect(formExists).toEqual(true)
  })

  test('renders a button to add a new card', () => {
    const button = stackForm.find('Button').at(0).props().children

    expect(button).toEqual('Add Card')
  })

  test('renders a button to submit the form', () => {
    const button = stackForm.find('Button').at(1).props().children

    expect(button).toEqual('Save and Add the Stack')
  })
})
