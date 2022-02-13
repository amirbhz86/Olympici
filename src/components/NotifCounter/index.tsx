import { AlarmSVG } from '../../assets/icons/index'
import React, { memo } from 'react'
import { View } from 'react-native'
import { useRedux } from '../../hooks/index'
import { log } from '../../common/index'
import styles from './styles'

const NotifCounter = (props) => {
  const { counterView } = styles
  const { notifCounterStatus = true } = props
  const { Get } = useRedux()
  const { newNotif } = Get().user

  return (
    <View>
      <AlarmSVG width={18} height={22} />
      {newNotif && notifCounterStatus
        ? <View style={counterView} />
        : <View/>
      }
    </View>
  )
}

export default memo(NotifCounter)
