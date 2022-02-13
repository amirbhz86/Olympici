import { MainColors, strings } from '../../common/index'
import { AngleAndString, Text } from '../../components/index'
import React, { memo } from 'react'
import { View } from 'react-native'
import { Props } from './models'
import styles from './styles'

const TitleAndAngle = (props: Props) => {
  const { title, style, onPress, seeAll = true } = props
  const { titleAndAngleView, titleText } = styles

  return (
    <View style={[titleAndAngleView, style]}>
      {seeAll
        ? <AngleAndString
          onPress={onPress}
          string={strings.showAll} />
        : <View />
      }
      <Text
        style={titleText}
        numberOfLines={1}
        color={MainColors.titleText}
        type={'bold'}>
        {title}
      </Text>
    </View>
  )
}

export default memo(TitleAndAngle)
