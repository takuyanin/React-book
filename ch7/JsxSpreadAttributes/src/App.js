import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
  render() {
    return (
      <Child1 {...this.props} />
    )
  }
}

const Child1 = (props) => <Child2 {...props} />

const Child2 = (props) => <Child3 {...props} />

const Child3 = (props) =>
  <div>
    <div>{props.foo}</div>
    <div>{props.bar}</div>
    <div>{props.baz}</div>
  </div>

Child3.propTypes = {
  foo: PropTypes.string,
  bar: PropTypes.string,
  baz: PropTypes.string,
}