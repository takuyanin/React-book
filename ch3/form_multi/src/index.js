import React from 'react'
import ReactDOM from 'react-dom'
import MultiForm from './MultiForm'

const st = {
  textAlign: 'center',
  padding: '10px'
}

ReactDOM.render(
  <div style={st}>
    <MultiForm />
  </div>,
  document.getElementById('root')
)