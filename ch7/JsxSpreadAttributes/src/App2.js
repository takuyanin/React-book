import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <Child1
        foo={this.props.foo}
        bar={this.props.bar}
      />
    )
  }
}

const Child1 = (props) => <Child2
    foo={props.foo}
    bar={props.bar}
  />

const Child2 = (props) => <Child3
    foo={props.foo}
    bar={props.bar}
  />

const Child3 = (props) =>
  <div>
    <div>{props.foo}</div>
    <div>{props.bar}</div>
  </div>