


import React, { useState } from 'react'
import InputView from './input-view'
import { Props } from './models'

const Input = (props : Props) => {
  const { onChangeValue } = props
  const [value, setValue] = useState<string>()

  const onChangeText = (value: string) => {
    onChangeValue && onChangeValue(value)
    setValue(value)
  }

  return (
    <InputView
      {...props}
      value={value}
      onChangeText={onChangeText}
    />
  )
}

export default Input




