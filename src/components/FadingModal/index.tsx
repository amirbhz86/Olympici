import React, { memo } from 'react'
import { Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Props } from './models'
import styles from './styles'

const FadingModal = (props: Props) => {
  const { status, backgroundonPress, children, animationType = 'fade' } = props
  const { containerWithoutFeed, containerOpacity } = styles
  return (
    <Modal animationType={animationType} transparent={true} visible={status}>
      <TouchableOpacity onPress={backgroundonPress} style={containerOpacity}>
        <TouchableWithoutFeedback style={containerWithoutFeed}>
          {children}
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  )
}

export default memo(FadingModal)
