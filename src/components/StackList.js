import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import stacks from '../data/stacks.json'
import { setStack, loadStacks } from '../actions'

class StackList extends Component {
  componentDidMount() {
    const { loadStacks } = this.props

    if (this.props.stacks.length === 0) {
      loadStacks(stacks)
    }
  }

  handleClick = stacks => () => {
    const { setStack } = this.props

    setStack(stacks)
  }

  render() {
    const { stacks } = this.props

    return (
      <div>
        {stacks.map(stack => (
          <Link
            key={stack.id}
            to='/stack'
            onClick={this.handleClick(stack)}
          >
            <h4>{stack.title}</h4>
          </Link>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ stacks }) => ({ stacks })

const connectComponent = connect(
  mapStateToProps,
  { setStack, loadStacks },
)(StackList)

export default connectComponent
