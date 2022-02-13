import React,{ memo } from 'react'
import { View } from 'react-native'
import styles from './styles'

const SeparatorLine = () => {
  const { containerView, lineView, circleView } = styles

  return (
    <View style={containerView}>
      <View style={lineView} />
      <View style={circleView} />
      <View style={lineView} />
    </View>
  )
}

export default memo(SeparatorLine)
