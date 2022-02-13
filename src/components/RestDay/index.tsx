import { RestDaySVG } from '../../assets/icons/index'
import { strings } from '../../common'
import { Text } from '../../components/index'
import React,{ memo } from 'react'
import { View } from 'react-native'
import { Props } from './models'
import styles from './styles'

const RestDay = (props: Props) => {
  const { containerView, titleText } = styles
  return (
    <View style={containerView}>
      <RestDaySVG />
      <Text style={[titleText, { marginTop: 40 }]} size="medium">
        {strings.restToday}
      </Text>
      <Text style={titleText} size="medium">
        {strings.yourMuscleNeedRest}
      </Text>
    </View>
  )
}

export default memo(RestDay)
