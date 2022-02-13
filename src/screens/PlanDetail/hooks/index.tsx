import React from 'react'
import { View } from 'react-native'
import { Text } from '../../../components/index'
import { log } from '../../../common/index'
import styles from '../styles'

export const useComponent = () => {

  const {
    rowItemView,
    lineView
  } = styles

  const RowItem = (props) => {
    const { rightTitle, leftTitle } = props
    return (
      <>
        <View style={rowItemView}>
          <Text type='bold'>
            {leftTitle}
          </Text>
          <Text style={{ fontWeight : 'bold'}} type='bold'>
            {rightTitle}
          </Text>

        </View>
        <View style={lineView} />
      </>
    )
  }
  return {
    RowItem,
  }
}

export default useComponent