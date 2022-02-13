import { log, MainColors, strings , notifications } from '../../common/index'
import { CommonHeader } from '../../components/index'
import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import useComponent from './hooks'
import { Props } from './models'
import styles from './styles'
import { useRedux } from '../../hooks/index'

const Notifs = (props: Props) => {
  const { navigation, route } = props

  const { Save, Get } = useRedux()

  const {
    prevScreen,
    renderNotifs,
    notifs,
    setLoading,
    loading,
    renderEmptyList
  } = useComponent(props)

  let headerTitle = prevScreen == 'notif' ? strings.notifs : strings.messages

  const {
    containerView,
    notifsFlatList,
    noMessageContainer,
    activityIndicator,
  } = styles

  return (
    <View style={containerView}>
      <CommonHeader
        notifCounterStatus={false}
        navigation={navigation}
        style={{ backgroundColor: MainColors.primary }}
        headerTitle={headerTitle}
        headerType="myExercise"
      />
      <FlatList
        style={notifsFlatList}
        ListEmptyComponent={renderEmptyList}
        data={notifications}
        renderItem={renderNotifs}
      />
    </View>
  )
}

export default Notifs
