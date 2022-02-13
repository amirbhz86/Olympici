import { MainColors } from '../../common/colors'
import { PressableRadius, Text } from '../../components/index'
import React, { memo } from 'react'
import { Props } from './models'
import styles from './styles'

const ServicesItem = (props: Props) => {
  const { title, icon, wrapperStyle, onPressIn, onPressOut, onPress } = props
  const { wrapperItem, titleText, contentItem } = styles

  return (
    <PressableRadius
      onPress={onPress}
      onPressOut={onPressOut}
      onPressIn={onPressIn}
      rippleBackgroundColor={MainColors.primary}
      style={[contentItem]}
      wrapperStyle={[wrapperItem, wrapperStyle]}>
      {icon}
      <Text style={titleText} size={'xSmall'}>
        {title}
      </Text>
    </PressableRadius>
  )
}

export default memo(ServicesItem)
