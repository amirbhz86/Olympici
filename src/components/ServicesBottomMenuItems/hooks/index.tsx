import { BasicColors, MainColors , strings } from '../../../common/index'
import { ServicesItem } from '../../../components/index'
import { useRedux } from '../../../hooks/index'
import React, { useState } from 'react'
import styles from '../styles'
import {Linking} from "react-native";
import { showMessage } from 'react-native-flash-message'

export const useComponent = (navigation) => {
  const { bottomItemView } = styles
  const [pressedItem, setPressedItem] = useState(undefined)
  const { Get } = useRedux()
  const { trainerField, athleteField } = Get().app

  const checkField = (screenName, callBack?: () => void) => {
    if (athleteField !== '' ) {
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
      case 'SportInsurance':
          //-->
          Linking.openURL('https://google.com/')
        return

      case 'TalentForm':
          //-->
          Linking.openURL('https://google.com/')
        return

       case 'SearchTrainer' :
         checkField('SearchTrainer')
         return 

        case 'PsychologyTest':
            //-->
            Linking.openURL('https://google.com/')
            return

      case undefined:
        return
      default:
        navigation.navigate(screenName)
        return
    }
  }

  const renderItems = ({ item, index }) => {
    return (
      <ServicesItem
        onPressOut={() => setPressedItem(undefined)}
        onPressIn={() => setPressedItem(index)}
        onPress={() => renderonPress(item.screenName)}
        title={item.title}
        icon={item.icon}
        wrapperStyle={[
          bottomItemView,
          {
            borderColor:
              index == pressedItem ? MainColors.primary80 : BasicColors.white,
          },
        ]}
      />
    )
  }
  return {
    renderItems,
  }
}

export default useComponent
