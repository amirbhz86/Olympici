import { NotifItem } from '../../../components/index'
import { useAPI, useRedux } from '../../../hooks/index'
import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { log } from '../../../common/index'
import { englishToPersianNum } from '../../../helper/index'
import { View } from 'react-native'
import styles from '../styles'
import { getFormatedDate } from 'react-native-modern-datepicker'
import { useFocusEffect } from '@react-navigation/native';
let jalaliDate : any 

export const useComponent = (props) => {
  const { navigation, route } = props
  let prevScreen = route.params.type

  const {
    lineView,
    noMessageConatiner
  } = styles

  const [notifs, setNotifs] = useState([])
  const [loading, setLoading] = useState(false)
  const { getAthleteNotifs } = useAPI()
  const { Save, Get } = useRedux()
  const { notifications } = Get().user

  const getNotifsBadRequest = (err) => {
    navigation.goBack()
  }


  useEffect(() => {
    // if (prevScreen == 'notif') {
    //   // getNotifs()
    // } else if (prevScreen == 'messages') {
    //   getMessages()
    // }
  }, [])

  const getNotifs = () => {

  }

  const getMessages = async () => {
    // setLoading(true)
    // const notifVar = await getAthleteNotifs(getNotifsBadRequest)
    // console.log('notifVar',notifVar);
    // setLoading(false)
    // if (notifVar) {
    //   setNotifs(notifVar.results)
    // } else {
    //   navigation.goBack()
    // }
  }

  const renderEmptyList = () => {
    return (
      <View style={noMessageConatiner}>
        {/* <NoMessage /> */}
      </View>
    )
  }

  const renderNotifs = ({ item, index }: { item: any; index: number }) => {

    return (
      <>
        {index !== 0 && <View style={lineView} />}
        <NotifItem title={ prevScreen == 'notif'  ? `notification ${index+1}` : `message ${index+1}`} screen={prevScreen} date={item.date} text={item.text} />
      </>
    )
  }

  useEffect(() => {
    console.log(notifs,'notifs 7987');
    console.log(prevScreen == 'notif' , prevScreen );
    
  }, [notifs])

  return {
    renderEmptyList,
    renderNotifs,
    notifs,
    setLoading,
    loading,
    prevScreen,
  }
}

export default useComponent
