import { CallUsSVG, ConversationSVG, EmailSVG } from '../../../assets/icons/index'
import { strings } from '../../../common/index'
import React from 'react'
import { Linking , Image } from 'react-native'
import { CardType, ComponentInput } from '../models'
import {englishToPersianNum} from "../../../helper/englishToPersianNum";

const useComponent = (componentInput: ComponentInput) => {
  const { navigation } = componentInput
  const renderCardDetail = (cardType: CardType) => {
    switch (cardType) {
      case 'map' : {
        return{
          bottomText: strings.showOnMap ,
          Icon: () => <Image style={{ width : 16 , height : 27  , resizeMode : 'contain'}} source={require('../../../assets/icons/map.png')} />,
          key: `${strings.address} `,
          onPress: (value: string) => Linking.openURL(`tel:${englishToPersianNum(value, false)}`),
        }
      }
      case 'phoneCall': {
        return {
          onPress: (value: string) => Linking.openURL(`tel:${englishToPersianNum(value, false)}`),
          key: `${strings.phoneCall}  :  `,
          Icon: () => <CallUsSVG width={16} height={16} />,
          bottomText: strings.contactUs,
        }
      }
      case 'email': {
        return {
          onPress: (value: string) => Linking.openURL(`mailto:${value}`),
          key: `${strings.email}  :  `,
          Icon: () => <EmailSVG width={16} height={16} />,
          bottomText: strings.takeEmail,
        }
      }
      case 'message': {
        return {
          onPress: () => navigation && navigation.navigate('SendMessage'),
          key: strings.sendMessageToOlympici,
          Icon: () => <ConversationSVG width={16} height={16} />,
          bottomText: strings.textUs,
        }
      }
    }
  }
  return { renderCardDetail }
}

export default useComponent
