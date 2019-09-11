import React from 'react'
import ReactDOM from 'react-dom'
import TextForm from './text'
import CBoxForm from './cbox'
import TextAreaForm from './textarea'
import RadioForm from './radio'
import SelectForm from './select'

ReactDOM.render(
  <div>
    <TextForm /><br /><hr />
    <CBoxForm /><br /><hr />
    <TextAreaForm /><br /><hr />
    <RadioForm items={['チョコ', '梅干し', 'ラムネ']} /><br /><hr />
    <SelectForm items={['チョコ', '梅干し', 'ラムネ']} value='ラムネ' />
  </div>,
  document.getElementById('root')
)