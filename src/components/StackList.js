import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import stacks from '../data/stacks.json'
import { setStack } from '../actions'

class StackList extends Component {
  handleClick = stacks => () => {
    const { setStack } = this.props

    setStack(stacks)
  }

  render() {
    return (
      <div>
        {stacks.map(stack => (
          <Link key={stack.id} to='/stack' onClick={this.handleClick(stacks[stack.id])}>
            <h4>{stack.title}</h4>
          </Link>
        ))}
      </div>
    )
  }
}

const connectComponent = connect(
  null,
  { setStack },
)(StackList)

export default connectComponent
