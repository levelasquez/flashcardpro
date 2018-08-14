import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

const props = { card: { prompt: 'test prompt', answer: 'test answer' } }

describe('Card component', () => {
  const card = shallow(<Card {...props} />)

  test('sets `reveal` to be `false`', () => {
    const state = card.state().reveal

    expect(state).toBe(false)
  })

  test('renders the card prompt', () => {
    const promptText = card.find('.card-prompt h4').text()

    expect(promptText).toEqual(props.card.prompt)
  })

  test('renders the card answer', () => {
    const answerText = card.find('.card-answer h4').text()

    expect(answerText).toEqual(props.card.answer)
  })

  test('applies the `text-hidden` class to the card answer', () => {
    const hasClass = card.find('.card-answer h4').hasClass('text-hidden')

    expect(hasClass).toBe(true)
  })

  describe('when clicking on the card', () => {
    beforeEach(() => card.simulate('click'))

    test('updates `reveal` to `true`', () => {
      const state = card.state().reveal

      expect(state).toBe(true)
    })

    test('applies the `text-revealed` class to the card answer', () => {
      const hasClass = card.find('.card-answer h4').hasClass('text-revealed')

    expect(hasClass).toBe(true)
    })
  })
})
