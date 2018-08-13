import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from './Card'

export class Stack extends Component {
  render() {
    const { stack: { title, cards = [] } } = this.props

    return (
      <div>
        <Link className='link-home' to='/'>
          <h4>Home</h4>
        </Link>
        <h3>{title}</h3>
        <br />
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ stack }) => ({ stack })

const connectedComponent = connect(mapStateToProps)(Stack)

export default connectedComponent
