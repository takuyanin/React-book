import React, { Component } from 'react'

export default class ZipInput extends Component {
  constructor (props) {
    console.log('constructor')
    super(props)
    const v = (this.props.value) ? this.props.value : ''

    this.state = {
      value: v,
      isOK: this.checkValue(v)
    }
  }

  checkValue (s) {
    console.log('checkValue')
    const zipPattern = /^\d{3}-\d{4}$/ // or /^(\d{3}-?\d{4}|\d{7})$/ allows no hyphen
    return zipPattern.test(s) // return boolean
  }

  handleChange (e) {
    console.log('handleChange')
    const v = e.target.value
    const newValue = v.replace(/[^0-9-]+/g, '') // remove things other than 0~9 and -
    const newIsOK = this.checkValue(newValue)

    this.setState({
      value: newValue,
      isOK: newIsOK
    })

    // if (this.props.onChange) {
    //   console.log(this)
    //   this.props.onChange({
    //     target: this,
    //     value: newValue,
    //     isOK: newIsOK
    //   })
    // }
  }

  // componentWillReceiveProps (nextProps) {
  //   console.log('componentWillReceiveProps')
  //   this.setState({
  //     value: nextProps.value,
  //     isOK: this.checkValue(nextProps.value)
  //   })
  // }

  renderStatusMessage () {
    console.log('renderStatusMessage')
    const so = {
      margin: '8px',
      padding: '8px',
      color: 'white'
    }
    let msg = null
    if (this.state.isOK) {
      so.backgroundColor = 'green'
      msg = <span style={so}>OK</span>
    } else {
      if (this.state.value != '') {
        so.backgroundColor = 'red'
        msg = <span style={so}>NG</span>
      }
    }
    return msg
  }
  render () {
    console.log('render')
    const msg = this.renderStatusMessage()
    return (<div>
      <label>郵便番号： <br />
        <input type='text'
          placeholder='郵便番号を入力'
          value={this.state.value}
          onChange={e => this.handleChange(e)} />
        {msg}
      </label>
    </div>)
  }
}
