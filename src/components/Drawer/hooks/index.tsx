import { END_POINTS, TOKEN_PREFIX, URL } from '../../../api/useApiCore'
import {
  AboutSVG,
  ConnectionSVG,
  ContractAppSVG,
  ExitSVG,
  InviteSVG,
  MarksSVG,
  NewsSVG,
  RateAppSVG,
  RulesSVG,
  SupportSVG,
  UserAccountSVG,
  WebsiteSVG,
} from '../../../assets/icons/index'
import { OlympiciBigSVG } from '../../../assets/images/index'
import { KEYS, log, strings, windowH } from '../../../common/index'
import { Button, Pressable, Text } from '../../../components/index'
import { vs } from '../../../helper/index'
import useRedux from '../../../hooks/useRedux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Image, Linking, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import ImagePicker from 'react-native-image-crop-picker'
import RNRestart from 'react-native-restart'
import styles from '../styles'

export const useComponent = (props) => {
  const { navigation } = props

  const {
    selectFromGallery,
    selectFromCamera,
    profileView,
    headerview,
    middleview,
    bottomView,
    itemContainer,
    iconView,
    leftView,
    profileImage,
    profilePress,
    innerSelectFromCamera,
    innerSelectFromGallery,
  } = styles

  const { Get, Save } = useRedux()
  const { fullName, userProfile , userType } = Get().user
  const { athleteField, trainerField } = Get().app
  const [uploadAvatarModal, setUploadAvatarModal] = useState(false)
  
  const checkNavigate = (value) => {
    if (athleteField !== '' && userType=='Athlete' ) {
      navigation.navigate(value)
    }else if ( userType=='Trainer' ){
      navigation.navigate(value)
    } else {
      showMessage({
        message: strings.pleaseFillYourField,
        type: 'danger',
        duration: 2500,
      })
    }
  }

  const HeaderDrawer = () => {
    return (
      <View style={profileView}>
        {/* <Image source={require('../../../assets/images/olympiciText.png')} /> */}
        <Image style={{ width : 135 , height : 60 , top : windowH*0.134 - 60 , left : '35%' , position : 'absolute'}} source={require('../../../assets/images/olympiciTextEnglish.png')}/>
        <OlympiciBigSVG style={{ right : 10 }} width={60} height={76.5} />
      </View>
    )
  }

  const getAuthToken = async () => {
    const tokens = await AsyncStorage.getItem(KEYS.STORAGE.TOKENS)
    if (tokens) {
      let tokensObject = JSON.parse(tokens)
      return `${TOKEN_PREFIX} ${tokensObject.access_token}`
    } else {
      return ''
    }
  }

  const sendFile = async (base64Profile: any, path: any) => {
    setUploadAvatarModal(false)

    let url = URL + END_POINTS['profile']
    let dd = await getAuthToken()

    // RNFetchBlob.fetch(
    //   'PATCH',
    //   url,
    //   {
    //     Authorization: await getAuthToken(),
    //     'Content-Type': 'multipart/form-data',
    //     Accept: 'application/json; charset=utf-8',
    //     'RNFB-Response': 'utf8',
    //   },
    //   [
    //     {
    //       name: 'profile',
    //       filename: path.substring(path.search(/[^/]*$/)),
    //       data: base64Profile,
    //     },
    //   ],
    // )
    //   .then((response: any) => {
    //     let responseData = JSON.parse(response.data)
    //     Save({ userProfile: responseData.user_obj.profile }, 'user')
    //     showMessage({
    //       message: strings.uploadImageSuccessfully,
    //       type: 'success',
    //       duration: 2500,
    //     })
    //   })
    //   .catch((err: any) => {
    //     showMessage({
    //       message: strings.errorMessage,
    //       type: 'danger',
    //       duration: 2500,
    //     })
    //   })
    //   .finally(() => {
    //     setUploadAvatarModal(false)
    //   })
  }

  const uploadAvatar = () => {
    navigation.closeDrawer()
    setUploadAvatarModal(true)
  }

  const HeaderLinks = () => {
    return (
      <View style={headerview}>
        <DrawerItem
          title={strings.userAccount}
          onPress={() => navigation.navigate('UserAccount')}
          icon={<UserAccountSVG width={17} height={17} />}
        />
        <DrawerItem
          style={{ marginVertical: vs(17) }}
          title={strings.marked}
          onPress={() => checkNavigate('MarkedExercises')}
          icon={<MarksSVG width={17} height={17}/>}
        />
        <DrawerItem title={strings.news} onPress={() => {
          //-->
          Linking.openURL('https://cnili.com/')
        }} icon={<NewsSVG width={17} height={17}/>} />
      </View>
    )
  }

  const MiddleLinks = () => {
    return (
      <View style={middleview}>
        <DrawerItem
          style={{ marginBottom: vs(17) }}
          title={strings.invite}
          onPress={() => navigation.navigate('InviteFriend')}
          icon={<InviteSVG width={17} height={17}/>}
        />
        <DrawerItem
          style={{ marginBottom: vs(17) }}
          title={strings.rateApp}
          //-->
          onPress={() => Linking.openURL('https://cnili.com/')}
          icon={<RateAppSVG  width={17} height={17} />}
        />
        <DrawerItem
          style={{ marginBottom: vs(17) }}
          title={strings.website}
          //-->
          onPress={() => Linking.openURL('https://cnili.com/')}
          icon={<WebsiteSVG  width={17} height={17} />}
        />
        <DrawerItem
          style={{ marginBottom: vs(17) }}
          title={strings.rules}
          //-->
          onPress={() => Linking.openURL('https://cnili.com/')}
          icon={<RulesSVG  width={17} height={17}/>}
        />
        <DrawerItem
          style={{ marginBottom: vs(17) }}
          title={strings.about}
          //-->
          onPress={() => Linking.openURL('https://cnili.com/')}
          icon={<AboutSVG  width={17} height={17}/>}
        />
        <DrawerItem
          title={strings.connection}
          onPress={() => navigation.navigate('ContactUs')}
          icon={<ConnectionSVG  width={17} height={17}/>}
        />
      </View>
    )
  }

  const exitOnPress = async () => {
    await AsyncStorage.removeItem(KEYS.STORAGE.TOKENS)
    await AsyncStorage.removeItem(KEYS.STORAGE.ATHLETE_FIELD)
    RNRestart.Restart()
  }

  const BottomLinks = () => {
    return (
      <View style={bottomView}>
        <DrawerItem
          title={strings.exitApp}
          icon={<ExitSVG width={17} height={17}/>}
          onPress={exitOnPress}
        />
      </View>
    )
  }

  const DrawerItem = (props) => {
    const { title, icon, style, onPress } = props
    return (
      <Pressable onPress={onPress} wrapperStyle={[itemContainer, style]}>
        <Text size="medium" type="bold">
          {title}
        </Text>
        <View style={iconView}>{icon}</View>
      </Pressable>
    )
  }

  const hideModal = () => {
    setUploadAvatarModal(false)
  }

  const SelectFromGallery = () => {
    return (
      <Button
        wrapperStyle={selectFromGallery}
        innerStyle={innerSelectFromGallery}
        onPress={selectGallery}
        title={strings.selectFromGallery}></Button>
    )
  }

  const SelectFromCamera = () => {
    return (
      <Button
        wrapperStyle={selectFromCamera}
        innerStyle={innerSelectFromCamera}
        onPress={selectCamera}
        title={strings.selectFromCamera}></Button>
    )
  }

  const selectGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      readFile(image.path)
    })
  }

  const selectCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      readFile(image.path)
    })
  }

  const readFile = async (path) => {
    // try {
//       const base64Profile = await RNFS.readFile(path, 'base64')
// console.log(base64Profile,'base64Profile');

//       sendFile(base64Profile, path)
//     } catch (err: any) {
//       log(err, 'err reading')
//     }
  }

  return {
    DrawerItem,
    hideModal,
    HeaderDrawer,
    HeaderLinks,
    MiddleLinks,
    BottomLinks,
    uploadAvatarModal,
    setUploadAvatarModal,
    SelectFromGallery,
    SelectFromCamera,
  }
}

export default useComponent
