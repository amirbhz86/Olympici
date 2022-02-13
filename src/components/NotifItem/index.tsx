import { NotifLockSVG } from '../../assets/icons/index'
import { MainColors } from '../../common/colors'
import { Text } from '../../components/index'
import React,{ memo } from 'react'
import { View } from 'react-native'
import { Props } from './models'
import styles from './styles'

const NotifItem = (props: Props) => {
  const {
    containerView,
    firstRowView,
    rightFirstRowView,
    notifLockSvg,
    textView,
    textText,
  } = styles

  const { title, date, text , screen } = props
  return (
    <View style={containerView}>
      <View style={firstRowView}>
        <Text size="small" color={MainColors.commentBorder}>
          {date}
        </Text>
        <View style={rightFirstRowView}>
          <Text size="medium" color={MainColors.text} type="bold">
            {title}
          </Text>
          <NotifLockSVG style={notifLockSvg} />
        </View>
      </View>
      <View style={textView}>
        <Text style={textText} size="small" color={ screen=='notif' ? 'black' : MainColors.commentBorder }>
          {text}
        </Text>
      </View>
    </View>
  )
}

export default memo(NotifItem)
