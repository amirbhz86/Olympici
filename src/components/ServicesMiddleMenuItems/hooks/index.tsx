import { MainColors, strings , log } from '../../../common/index'
import { ServicesItem } from '../../../components/index'
import useRedux from '../../../hooks/useRedux'
import React, { useState } from 'react'
import { Linking } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { Props } from '../models'
import styles from '../styles'

const useComponent = (props: Props) => {
  const { navigation, data } = props
  const { middleItemView } = styles
  const { Get } = useRedux()
  const [pressedItem, setPressedItem] = useState(undefined)
  const { athleteField, trainerField } = Get().app
  const { userType } = Get().user
  const { myCoach } = Get().user
  
  const checkField = (screenName, callBack?: () => void) => {
    if ( true ) {
      callBack ? callBack() : navigation.navigate(screenName)
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
      case 'ChartDisplay':
        if ( true  ){
          navigation.navigate('ChartDisplay',{ id : '1'})
        }else if ( userType=='Athlete' ){
          navigation.navigate('ChartDisplay')
        }
        return
      case 'RecordsList':
        checkField('RecordsList')
        return
      case 'MyProgress':
        checkField('MyProgress')
        return
      case 'CoachProfile':
        checkField('CoachProfile', () => {
          if (true) {
            navigation.navigate('CoachProfile')
            return
          }
          showMessage({
            message: strings.youDontHaveAnyCoachInThisBranch + strings.youShouldSendCoachRequestForThisBranchFromSideMenu,
            type: 'danger',
            duration: 6000
          })
        })
        return
      case 'Webinar':
        //-->
        Linking.openURL('https://google.com/')
        return
      case 'PayTheCoachTuition':
        //-->
        Linking.openURL('https://google.com/')
        return
      case 'callAthlete':
        'athlete_obj' in data &&
          Linking.openURL(`tel:${data.athlete_obj.username}`)
        return
      case undefined:
        return
      default:
        navigation.navigate(screenName, data)
        return
    }
  }

  const renderMiddleMenu = ({ item, index }) => {
    return (
      <ServicesItem
        onPressOut={() => setPressedItem(undefined)}
        onPressIn={() => setPressedItem(index)}
        onPress={() => renderonPress(item.screenName)}
        wrapperStyle={[
          middleItemView,
          {
            borderColor: index == pressedItem ? MainColors.primary80 : 'white',
          },
        ]}
        title={item.title}
        icon={item.icon}
      />
    )
  }
  return {
    renderMiddleMenu,
  }
}

export default useComponent
