import { BasicColors, MainColors } from '../../common/index'
import { Pressable, Text } from '../../components/index'
import React from 'react'
import { View } from 'react-native'
import useComponent from './hooks'
import { Props } from './models'
import styles from './styles'

const ExerciseItem = (props: Props) => {
  const { title, bottomTitle, type } = props
  const { renderDetailItem, itemOnPress, checkboxStatus } = useComponent(props)
  const { rightView, leftView, leftTitleText } = styles
  const { itemStyle, leftTitle, LeftIcon, Bookmark } = renderDetailItem(type)

  return (
    <Pressable
      onPress={itemOnPress}
      wrapperStyle={[itemStyle, { marginTop: 10, zIndex: -1000 }]}>
      <Bookmark />
      <View style={leftView}>
        <LeftIcon />
        <Text color={BasicColors.white} style={leftTitleText}>
          {leftTitle}
        </Text>
      </View>
      <View style={rightView}>
        <Text
          color={
            type == 'completed' ? BasicColors.white : MainColors.primaryLighter
          }>
          {title}
        </Text>
        <Text
          color={
            type == 'completed' ? BasicColors.white : MainColors.nearBlack
          }>
          {bottomTitle}
        </Text>
      </View>
    </Pressable>
  )
}

export default ExerciseItem
