import { log, MainColors, strings } from '../../../common/index'
import { ServicesItem } from '../../../components/index'
import useRedux from '../../../hooks/useRedux'
import React, { useState } from 'react'
import { Linking } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import styles from '../styles'

const useComponent = ({ navigation }: { navigation: any }) => {
  const [pressedItem, setPressedItem] = useState(undefined)
  const { Save, Get } = useRedux()
  const { athleteField, trainerField } = Get().app
  const { myCoach } = Get().user

  const checkField = (screenName) => {
    if (true) {
      console.log(screenName,'screenName');
      
      navigation.navigate(screenName)
    } else {
      showMessage({
        message: strings.pleaseFillYourField,
        type: 'danger',
        duration: 2500,
      })
    }
  }

  const renderonPress = (screenName: any) => {
    switch (screenName) {
      case undefined:
        return
      case 'callTrainer':
        if (myCoach?.id) {
          Linking.openURL(`https://wa.me/${myCoach.user_obj.username}`)
          return
        }
        showMessage({
          message: strings.youDontHaveAnyCoachInThisBranch + strings.youShouldSendCoachRequestForThisBranchFromSideMenu,
          type: 'danger',
          duration: 6000
        })
        return
      case 'ExercisesList':
        checkField('ExercisesList')
        return
      case 'addToMyAthletes':
        navigation.navigate('RequestList')
        return
      case 'Notifs':
        navigation.navigate(screenName, { type: 'messages' })
        return
      default:
        navigation.navigate(screenName)
        return
    }
  }

  const renderTopMenu = ({ item, index }) => {
    const { topMenuItem } = styles
    return (
      <ServicesItem
        onPressOut={() => setPressedItem(undefined)}
        onPressIn={() => setPressedItem(index)}
        onPress={() => renderonPress(item.screenName)}
        wrapperStyle={{
          ...topMenuItem,
          borderColor: index == pressedItem ? MainColors.primary80 : 'white',
        }}
        title={item.title}
        icon={item.icon}
      />
    )
  }
  return {
    renderTopMenu,
  }
}

export default useComponent
