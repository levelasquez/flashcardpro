import React, { Component } from 'react'

class Card extends Component {
  state = { reveal: false }

  handleOnClick = () => this.setState({ reveal: true })

  render() {
    const { reveal } = this.state
    const { card: { prompt, answer } } = this.props

    return (
      <div className='card' onClick={this.handleOnClick}>
        <div className='card-prompt'>
          <h4>
            {prompt}
          </h4>
        </div>
        <div className='card-answer'>
          <h4 className={reveal ? 'text-revealed' : 'text-hidden'}>
            {answer}
          </h4>
        </div>
      </div>
    )
  }
}

export default Card
