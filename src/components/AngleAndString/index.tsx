import { AngleBracketLeftSVG , ArrowRightSVG , LittleArrowRightSVG } from '../../assets/icons'
import { MainColors } from '../../common/index'
import { PressableRadius, Text } from '../../components/index'
import React, { memo } from 'react'
import { View } from 'react-native'
import { Props } from './models'
import styles from './styles'

const AngleAndString = (props: Props) => {
  const { string, onPress } = props
  const { readMoreWrapper, angleIcon, readMoreText, content } = styles
  return (
    <View>
      <PressableRadius
        style={content}
        wrapperStyle={readMoreWrapper}
        onPress={onPress}>
        <LittleArrowRightSVG color={MainColors.primary} width={17} height={17}  />
        <Text color={MainColors.titleText} style={readMoreText} size={'xSmall'}>
          {string}
        </Text>
      </PressableRadius>
    </View>
    )
}

    export default memo(AngleAndString)
