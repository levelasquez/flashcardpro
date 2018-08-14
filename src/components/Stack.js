import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from './Card'

export const Stack = ({ stack: { title, cards } }) => (
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

const mapStateToProps = ({ stack }) => ({ stack })

const connectedComponent = connect(mapStateToProps)(Stack)

export default connectedComponent
