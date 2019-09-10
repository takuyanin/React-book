import React from 'react'
import PropTypes from 'prop-types'

export default class FormInput extends React.Component {
  constructor (props) {
    super(props)
    const v = this.props.value
    this.state = {
      value: v,
      isOK: this.checkValue(v)
    }
  }

  checkValue (s) {
    if (this.props.pattern === null) {
      return true
    }
    return this.props.pattern.test(s)
  }

  handleChange (e) {
    const v = e.target.value
    const filter = this.props.filter
    let newValue = v
    if (filter !== null) {
      newValue = newValue.replace(filter, '')
    }
    const newIsOK = this.checkValue(newValue)
    this.setState({
      value: newValue,
      newIsOK: newIsOK
    })

    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue,
        isOK: newIsOK,
        name: this.props.name
      })
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillRecieveProps')
    this.setState({
      value: nextProps.value,
      isOK: this.checkValue(nextProps.value)
    })
  }

  renderStatusMessage () {
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
      if (this.state.value !== '') {
        so.backgroundColor = 'red'
        msg = <span style={so}>NG</span>
      }
    }
    return msg
  }
  render () {
    const msg = this.renderStatusMessage()
    return (<div>
      <label>{this.props.label}: <br />
      <input type='text'
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.state.value}
        onChange={e => this.handleChange(e)} />
        {msg}
      </label>
    </div>)
  }
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  filter: PropTypes.object,
  pattern: PropTypes.object,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

FormInput.defaultProps = {
  filter: null,
  pattern: null,
  value: '',
  placeholder: '',
  onChange: null
}
