import { LockIconSVG, PhoneIconSVG , PersonSVG  , AuthPurpleSVG } from '../../assets/icons'
import { log, MainColors, strings } from '../../common/index'
import { CommonActions } from '@react-navigation/native'
import {
  BottomButtonText,
  CheckBox,
  Input,
  PressableRadius,
  RunningHeader,
  Text,
} from '../../components/index'
import { useRedux } from '../../hooks/index'
import React, { useEffect } from 'react'
import { StatusBar, View, ScrollView } from 'react-native'
import useContainer from './hooks/useContainer'
import { Props } from './models'
import styles from './styles'
let passRef: any = React.createRef(null)

const Login = (props: Props) => {
  const { navigation } = props
  const { Save, Get } = useRedux()
  const { remindPhoneAndPass } = Get().app
  const {
    containerView,
    bottomSectionView,
    wrraperButton,
    inputLogin,
    remindRowView,
    inputLoginView,
    marginBottomButtonText,
  } = styles
  const {
    WelcomeAndInstruction,
    loginUser,
    setPassword,
    password,
    phoneNumber,
    setPhoneNumber,
    goToSignUp,
    rememberMe,
    setRememberMe,
  } = useContainer({ navigation })

  return (
    <ScrollView style={containerView}>
      <StatusBar
        backgroundColor={MainColors.primary}
        barStyle="light-content"
      />
      <RunningHeader
        backPress={() => {     
           navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'Initial' }],
          }),
        ) }}
        {...{ hasBack: true, navigation }} />
      <View style={bottomSectionView}>
        <WelcomeAndInstruction />
        <View style={inputLoginView}>
          <Input
            value={phoneNumber}
            onChangeValue={(value: any) => {
              setPhoneNumber(value)
            }}
            textInputStyle={{ textAlign: 'left' }}
            Icon={AuthPurpleSVG}
            style={inputLogin}
            title={strings.username}
            placeholder={'username'}
            onSubmitEditing={() => passRef.current.focus()}
          />
          <Input
            value={password}
            textInputStyle={{ textAlign: 'left' }}
            selectTextOnFocus={true}
            onChangeValue={(value: any) => setPassword(value)}
            ref={passRef}
            Icon={LockIconSVG}
            style={[inputLogin, { textContentType: 'password' }]}
            title={strings.password}
            placeholder={strings.stars}
            onSubmitEditing={() => loginUser()}
          />
        </View>
        <View style={remindRowView}>
          <PressableRadius>
            <Text size="xSmall">{strings.didYouForgetPassword}</Text>
          </PressableRadius>
          <CheckBox
            title={strings.rememberMe}
            onChangeValue={(value: boolean) => setRememberMe(value)}
            checked={rememberMe}
          />
        </View>
        <BottomButtonText
          buttonOnPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: 'App',
                    // params: { screen: 'Athlete' },
                  },
                ],
              }))

          }}
          textOnPress={goToSignUp}
          style={marginBottomButtonText}
          normString={strings.dontHaveAcount}
          pressString={strings.registerYourself}
          buttonString={strings.login}
        />
      </View>
    </ScrollView>
  )
}

export default Login
