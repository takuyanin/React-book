import React from 'react'
import ReactDOM, { render } from 'react-dom'
import App from './App'

const props = {
  foo: 'foo',
  bar: 'bar',
  baz: 'baz'
}

render(<App {...props} />, document.getElementById('root'))