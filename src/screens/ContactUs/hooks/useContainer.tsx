import { InstagramSVG, InternetSVG, TelegramSVG, WhatsappSVG } from '../../../assets/icons/index'
import { log, MainColors, strings, onlyStringRegex } from '../../../common/index'
import {
  // BolderText,
  Pressable, Text
} from '../../../components/index'
import { englishToPersianNum } from '../../../helper/index'
import { useAPI, useRedux } from "../../../hooks/index"
import React, { useEffect, useState } from 'react'
import { Image, Linking, Platform, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ContactInformation } from '../models'
import styles from '../styles'
import { useFocusEffect } from '@react-navigation/native'

const useContainer = () => {
  const [contactInformation, setContactInformation] = useState<ContactInformation>(
    {
      webSite: '',
      whatsapp: '',
      telegram: '',
      instagram: '',
      email: '',
      address: '',
      phoneNumber: '',
      addressImage: ``,
      addressMap: {
        lat: '',
        lon: ''
      },
    }
  )
  const { Save } = useRedux()
  const { getPhrasesAPI } = useAPI()
  const {
    addressSectionView,
    topAddressSection,
    addressText,
    showOnMapText,
    mapImage,
    socialRowView,
    socialCircleView,
    appLawView,
    appLawText,
    companyNameText,
  } = styles


  useEffect(() => {
    // getAllContactInformation()
  }, [])


  const getAllContactInformation = async () => {
    const { results } = await getPhrasesAPI({
      slugs: [
        'olampiki-web-site',
        'olampiki-whatsapp',
        'olampiki-telegram',
        'olampiki-instagram',
        'olampiki-email',
        'olampiki-address',
        'olampiki-phone-number',
        'olampiki-address-image',
        'olampiki-address-lat',
        'olampiki-address-lon',
      ]
    })
    if (results && results.length === 10) {
      const information = {
        webSite: results[0].text,
        whatsapp: results[1].text,
        telegram: results[2].text,
        instagram: results[3].text,
        email: results[4].text,
        address: results[5].text,
        phoneNumber: englishToPersianNum(results[6].text),
        addressImage: results[7].file_field,
        addressMap: {
          lat: results[8].text,
          lon: results[9].text
        },
      }
      setContactInformation(information)
    }
  }

  useFocusEffect(
    React.useCallback(() => {
       Save({ selectedTab : 'ContactUs' },'app')
    }, []),
  )


  const showOnMapPress = async () => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    })
    const latLng = `${63.6261},${97.6008}`
    const label = strings.showOnMap
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    })
    await Linking.openURL(`${url}`)
  }

  const AddressSection = () => {
    return (
      <View style={addressSectionView}>
        <View style={topAddressSection}>
          <View>
            <Text type={'medium'} size={'small'} style={addressText}>
              {`${strings.address}: ${contactInformation.address}`}
            </Text>
            <Pressable onPress={showOnMapPress}>
              <Text
                size={'small'}
                color={MainColors.primaryLight}
                style={showOnMapText}>
                {strings.showOnMap}
              </Text>
            </Pressable>
          </View>
        </View>
        <Image
          source={{ uri: contactInformation.addressImage }} resizeMode={'contain'}
          style={mapImage}
        />
      </View>
    )
  }

  const SocialRow = () => {
    return (
      <View style={socialRowView}>
        <TouchableOpacity onPress={() => Linking.openURL(contactInformation.instagram)}>
          <InstagramSVG width={45} height={45} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL(`https://t.me/${contactInformation.telegram}`)}
          style={socialCircleView}
        >
          <TelegramSVG width={25} height={25} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL(`https://wa.me/${contactInformation.whatsapp}`)}
          style={socialCircleView}
        >
          <WhatsappSVG width={25} height={25} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL(contactInformation.webSite)}
          style={socialCircleView}
        >
          <InternetSVG width={25} height={25} />
        </TouchableOpacity>
      </View>
    )
  }

  const AppLaw = () => {
    return (
      <View style={appLawView}>
        <Text style={appLawText}>
          {strings.appLaw1}
          {/* <BolderText style={companyNameText}>
                        {' '}
                        {strings.companyName}{' '}
                    </BolderText> */}
        </Text>
        <Text style={appLawText}>
          {strings.appLaw2}
        </Text>
      </View>
    )
  }




  return {
    AddressSection,
    SocialRow,
    getAllContactInformation,
    AppLaw,
    contactInformation,
  }
}

export default useContainer
