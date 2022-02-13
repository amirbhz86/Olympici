import React, { memo } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import useComponent from './hooks'
import { Props } from './models'

const Exercise = (props: Props) => {

  const { containerView, lineView , firstLineView } = styles
  
  const { HeaderPart, BodyPart, FooterPart, AddToProgramModal } = useComponent(
    props,
  )
  return (
    <View style={containerView}>
      <HeaderPart />
      <View style={firstLineView} />
      <BodyPart />
      <View style={lineView} />
      <FooterPart />
      <AddToProgramModal />
    </View>
  )
}

export default memo(Exercise)
