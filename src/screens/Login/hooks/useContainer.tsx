import { KEYS, log, strings } from '../../../common/index'
import { Text } from '../../../components/index'
import { englishToPersianNum } from '../../../helper/englishToPersianNum'
import { useAPI, useRedux } from '../../../hooks/index'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import RNRestart from 'react-native-restart'
import styles from '../styles'
// import { Props } from './models'
let token: any

const useContainer = (props : any ) => {
  const { navigation } = props
  const { welcomeView, welcomeText, enterPhoneText } = styles
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  // const { getServerToken, setToken, getLocalToken, checkToken } = useToken()
  const { Save, Get } = useRedux()
  const { currentStack } = Get().app

  useEffect(() => {
    // getAuthInfo()
    Save({ hideTabbar: true }, 'app')
  }, [])

  const getAuthInfo = async () => {
    let authInfo: any = await AsyncStorage.getItem(KEYS.STORAGE.AUTH_INFO)
    if (authInfo) {
      authInfo = JSON.parse(authInfo)
      if (authInfo) {
        setPhoneNumber(authInfo.username)
        setPassword(authInfo.password)
        setRememberMe(true)
      }
    }
  }

  const WelcomeAndInstruction = () => {
    return (
      <>
        <View style={welcomeView}>
          <Text size={'heading'} style={welcomeText} type={'bold'}>
            {strings.welcomeToOlympici}
          </Text>
          <Text size={'medium'} style={enterPhoneText}>
            {strings.enterYourPhoneAndPassword}
          </Text>
        </View>
      </>
    )
  }

  const loginUser = async () => {
    // setToken({ 'access_token': 'zdrf6KdVxIvWViWhPx5avBSZ4aVfpI', 'refresh_token': 'y0AtgTo4PIcLlOEHHdTxxdaSRdKYBZ' })
    // const ss= await getLocalToken()
    // log(ss,'ss')
    // const checkTokenResult = await checkToken()
    // log(checkTokenResult , 'checkToken')

    let signInData = {
      username: englishToPersianNum(phoneNumber, false),
      // password: englishToPersianNum(password,false)
    }

    log(signInData, 'signInData47937')
    // phoneNumber
    //   ? (token = await getServerToken(signInData))
    //   : showMessage({
    //       message: strings.fillAllFields,
    //       type: 'danger',
    //       duration: 2500,
    //     })
    log(token, 'token')
    if (token !== null && 'refresh_token' in token) {
      if (rememberMe) {
        await AsyncStorage.setItem(
          KEYS.STORAGE.AUTH_INFO,
          JSON.stringify(signInData),
        )
      } else {
        await AsyncStorage.removeItem(KEYS.STORAGE.AUTH_INFO)
      }
      showMessage({
        message: strings.loginSuccessfully,
        type: 'success',
        duration: 2500,
      })
      setTimeout(() => {
        RNRestart.Restart()
      }, 2500)
    } else {
      AsyncStorage.clear()
      showMessage({
        message: strings.wrongUsernameAndPassword,
        type: 'danger',
        duration: 2500,
      })
    }
  }

  const goToSignUp = () => {
    navigation.navigate('Register')
  }
  return {
    WelcomeAndInstruction,
    loginUser,
    setPhoneNumber,
    phoneNumber,
    setPassword,
    password,
    goToSignUp,
    rememberMe,
    setRememberMe,
  }
}

export default useContainer
