import React, { Component } from 'react'
import request from 'superagent'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: null
    }
  }

  UNSAFE_componentWillMount () {
    console.log('componentWillMount')
    request.get('./fruits.json')
      .accept('application/json')
      .end((err, res) => {
        this.loadedJSON(err, res)
      })
  }

  loadedJSON (err, res) {
    if (err) {
      console.log('JSON読み込みエラー')
      return
    }
    this.setState({
      items: res.body
    })
  }

  render () {
    console.log('render')
    if (!this.state.items) {
      return <div className='App'>現在読み込み中</div>
    }
    const options = this.state.items.map(item => {
      return <option value={item.price} key={item.name}>
        {item.name}
      </option>
    })
    return (
      <div className='App'>
        果物；<select>{options}</select>
      </div>

    )
  }
}