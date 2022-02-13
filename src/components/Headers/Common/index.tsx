import { BasicColors } from '../../../common/index'
import { Text } from '../../../components/index'
import React, { memo } from 'react'
import { View } from 'react-native'
import useComponent from './hooks'
import { Props } from './models'
import styles from './styles'

const CommonHeader = (props: Props) => {
  const { headerType, headerTitle, style, navigation, onPress , titleSize , notifCounterStatus } = props
  const { containerView } = styles
  const { renderHeaderDetail } = useComponent({ navigation, onPress , notifCounterStatus  })
  const {
    title,
    RightIcon,
    SecondRightIcon,
    LeftIcon,
    SecondLeftIcon,
  } = renderHeaderDetail(headerType, headerTitle, navigation)

  return (
    <View style={[containerView, style]}>
      <Text
        type="medium"
        color={BasicColors.white}
        size={ titleSize ? titleSize : 'large'}
        style={{ textAlign: 'center' }}>
        {title}
      </Text>
      <SecondLeftIcon />
      <LeftIcon />
      <SecondRightIcon />
      <RightIcon />
    </View>
  )
}

export default memo(CommonHeader)
