import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import { addStack } from '../actions'

export class StackForm extends Component {
  state = {
    title: '',
    cards: [],
  }

  addCard = () => {
    const { cards } = this.state

    const newCard = {
      id: cards.length,
      prompt: '',
      answer: '',
    }

    const concatedCards = cards.concat(newCard)

    this.setState({ cards: concatedCards })
  }

  handleTitleChange = ({ target: { value: title } }) => this.setState({ title })

  handleOnChange = (index, type) => ({ target: { value } }) => {
    const { cards: cardsState } = this.state

    const cards = cardsState.map(card =>
      card.id === index
        ? {
          ...card,
          [type]: value,
        }
        : card)

    this.setState({ cards })
  }

  addStack = () => {
    const { addStack } = this.props

    addStack(this.state)
  }

  render() {
    const { cards } = this.state

    return (
      <div>
        <Link className='link-home' to='/'>
          <h4>
            Home
          </h4>
        </Link>
        <h4>Create a New Stack</h4>
        <br />
        <Form inline>
          <FormGroup>
            <ControlLabel>Title:</ControlLabel>
            {' '}
            <FormControl onChange={this.handleTitleChange} />
          </FormGroup>
          {cards.map((card, index) => (
            <div key={card.id}>
              <br />
              <FormGroup>
                <ControlLabel>Prompt:</ControlLabel>
                {' '}
                <FormControl onChange={this.handleOnChange(index, 'prompt')} />
                {' '}
                <ControlLabel>Answer:</ControlLabel>
                {' '}
                <FormControl onChange={this.handleOnChange(index, 'answer')} />
              </FormGroup>
            </div>
          ))}
        </Form>
        <br />
        <Button onClick={this.addCard}>
          Add Card
        </Button>
        {' '}
        <Button onClick={this.addStack}>Save and Add the Stack</Button>
      </div>
    )
  }
}

const connectedComponent = connect(null, { addStack })(StackForm)

export default connectedComponent
