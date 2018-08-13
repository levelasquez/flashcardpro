import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from './Card'

class Stack extends Component {
  render() {
    const { stack: { title, cards = [] } } = this.props

    return (
      <div>
        <Link to='/'>Home</Link>
        <h3>{title}</h3>
        <br />
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({ stack: state })

const connectedComponent = connect(mapStateToProps)(Stack)

export default connectedComponent
