import React, { memo } from 'react'
import { Platform, ScrollView, View } from 'react-native'
import { Props } from './models'
import styles from './styles'

const SPACER_SIZE = 1000

const ScrollViewTwoColorInseting = (props: Props) => {
  const { containerView } = styles
  const { children, topColor, bottomColor } = props
  return (
    <ScrollView
      contentContainerStyle={{ backgroundColor: topColor }}
      contentInset={{ top: -SPACER_SIZE }} // enough space to inset
      contentOffset={{ y: SPACER_SIZE }}
      // place for start scrolling
      style={{
        backgroundColor: Platform.OS == 'ios' ? bottomColor : topColor,
      }}>
      {Platform.OS == 'ios' && <View style={{ height: SPACER_SIZE }} />}
      {children}
    </ScrollView>
  )
}

export default memo(ScrollViewTwoColorInseting)
