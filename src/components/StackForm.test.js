import React from 'react'
import { shallow } from 'enzyme'
import { StackForm } from './StackForm'

const changeTitle = 'change title'
const changePrompt = 'change prompt'
const changeAnswer = 'change answer'

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

  describe('and updating the title', () => {
    beforeEach(() => stackForm.find('FormControl').simulate('change', {
      target: { value: changeTitle },
    }))

    test('updates the title in state', () => {
      const state = stackForm.state().title

      expect(state).toEqual(changeTitle)
    })
  })

  describe('when adding a new card', () => {
    beforeEach(() => stackForm.find('Button').at(0).simulate('click'))

    afterEach(() => stackForm.setState({ cards: [] }))

    test('adds a new card to the state', () => {
      const state = stackForm.state().cards.length

      expect(state).toEqual(1)
    })

    test('renders the prompt section', () => {
      const controlLabel = stackForm.find('ControlLabel').at(1).props().children

      expect(controlLabel).toEqual('Prompt:')
    })

    test('renders the answer section', () => {
      const controlLabel = stackForm.find('ControlLabel').at(2).props().children

      expect(controlLabel).toEqual('Answer:')
    })

    describe('and updating the card prompt', () => {
      beforeEach(() => stackForm.find('FormControl').at(1).simulate('change', {
        target: { value: changePrompt },
      }))

      test('updates the prompt in the state', () => {
        const prompt = stackForm.state().cards[0].prompt

        expect(prompt).toEqual(changePrompt)
      })
    })

    describe('and updating the card answer', () => {
      beforeEach(() => stackForm.find('FormControl').at(2).simulate('change', {
        target: { value: changeAnswer },
      }))

      test('updates the answer in the state', () => {
        const answer = stackForm.state().cards[0].answer

        expect(answer).toEqual(changeAnswer)
      })
    })
  })
})
