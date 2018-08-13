import React, { Component } from 'react'

class Card extends Component {
  render() {
    const { card: { prompt, answer } } = this.props

    return (
      <div>
        <div><h4>{prompt}</h4></div>
        <div><h4>{answer}</h4></div>
      </div>
    )
  }
}

export default Card
