import { MainColors } from '../../common/index'
import { PressableRadius, Text } from '../../components/index'
import React,{ memo } from 'react'
import { View } from 'react-native'
import useComponent from './hooks/useComponent'
import { Props } from './models'
import styles from './styles'

const ContactCard = (props: Props) => {
  const { rowPress, sectionRowView, callUsView, contentPress , leftText } = styles
  const { style, type, value, navigation } = props
  const { renderCardDetail } = useComponent({ navigation })
  const { Icon, key, bottomText, onPress } = renderCardDetail(type)

  return (
    <PressableRadius
    rippleBackgroundColor={MainColors.primaryLighter}
      onPress={() => onPress(value || '')}
      innerStyle={contentPress}
      wrapperStyle={[rowPress, style]}>
      <View style={sectionRowView}>
        <View style={callUsView}>
          <Icon />
        </View>
        <Text size={'xSmall'} style={{ textAlign : 'center'}} color={MainColors.primaryLight}>
          {bottomText}
        </Text>
      </View>
      <Text style={leftText}>
        {key}
        <Text type={'medium'}>{value}</Text>
      </Text>
    </PressableRadius>
  )
}

export default memo(ContactCard)
