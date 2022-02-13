import { URL } from '../../../../api/useApiCore'
import {
  AngleBracketLeftWhite,
  InfoSVG,
  SearchSVG,
  UserSVG,
} from '../../../../assets/icons/index'
import { ProfileDrawerSVG } from '../../../../assets/images/index'
import { NotifCounter, Pressable } from '../../../../components/index'
import useRedux from '../../../../hooks/useRedux'
// import { log } from '../../common/index'
import React from 'react'
import { Image, View } from 'react-native'
import { HeaderType } from '../models'
import styles from '../styles'

const useComponent = (props) => {
  const { onPress, navigation , notifCounterStatus } = props
  const {
    rightIconImage,
    profileView,
    leftIconSvg,
    secondLeftSvg,
    userWrapperPress,
    secondRightpress,
    leftIconContentPress,
    searchSvg,
  } = styles
  const { Get } = useRedux()
  const { userProfile } = Get().user

  const renderHeaderDetail = (
    headerType: HeaderType,
    headerTitle: string,
    navigation: any,
  ) => {
    switch (headerType) {
      case 'myExercise': {
        return {
          title: headerTitle,
          RightIcon: () => {
            return (
              <Pressable
                onPress={() => navigation.navigate('UserAccount')}
                wrapperStyle={profileView}>
                { false ? (
                  <Image
                    style={rightIconImage}
                    source={{ uri: `${URL}${userProfile}` }}
                  />
                ) : (
                  <Image style={{ width : 40 , height : 40 }} source={require('../../../../assets/images/profile.png')}/>
                  // <ProfileDrawerSVG width={40} height={40}/>
                )}
              </Pressable>
            )
          },
          SecondRightIcon: () => <View />,
          SecondLeftIcon: () => {
            return (
              <Pressable
                onPress={() => {
                  navigation.navigate('Notifs', {
                    type: 'notif',
                  })
                }}
                wrapperStyle={secondLeftSvg}>
                <NotifCounter notifCounterStatus={notifCounterStatus}/>
              </Pressable>
            )
          },
          LeftIcon: () => {
            return (
              <Pressable onPress={backonPress} wrapperStyle={[leftIconSvg]}>
                <AngleBracketLeftWhite width={8.25} height={15.31} />
              </Pressable>
            )
          },
        }
      }
      case 'personalInfo': {
        return {
          title: headerTitle,
          RightIcon: () => {
            return (
              <Pressable wrapperStyle={userWrapperPress} onPress={() => navigation.navigate('UserAccount')}>
                {/* <ProfileDrawerSVG width={40} height={40}/> */}
                <Image style={{ width : 40 , height : 40 }} source={require('../../../../assets/images/profile.png')}/>
              </Pressable>
            )
          },
          SecondRightIcon: () => <View />,
          SecondLeftIcon: () => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate('Notifs', {
                    type: 'notif',
                  })
                }
                wrapperStyle={secondLeftSvg}>
                <NotifCounter />
              </Pressable>
            )
          },
          LeftIcon: () => {
            return (
              <Pressable
                onPress={() => navigation.goBack()}
                wrapperStyle={leftIconSvg}>
                <AngleBracketLeftWhite width={8.25} height={15.31} />
              </Pressable>
            )
          },
        }
      }
      case 'fourIcon': {
        return {
          title: headerTitle,
          RightIcon: () => {
            return (
              <Pressable wrapperStyle={userWrapperPress} onPress={() => navigation.navigate('UserAccount')}>
                {/* <UserSVG width={20} height={20}/> */}
                { false ? (
                  <Image
                    style={rightIconImage}
                    source={{ uri: `${URL}${userProfile}` }}
                  />
                ) : (
                  // <ProfileDrawerSVG width={40} height={40}/>
                  <Image style={{ width : 40 , height : 40 }} source={require('../../../../assets/images/profile.png')}/>
                )}
              </Pressable>
            )
          },
          SecondRightIcon: () => <View/>,
          SecondLeftIcon: () => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate('Notifs', {
                    type: 'notif',
                  })
                }
                wrapperStyle={secondLeftSvg}>
                <NotifCounter />
              </Pressable>
            )
          },
          LeftIcon: () => {
            return (
              <Pressable
                onPress={() => navigation.goBack()}
                wrapperStyle={leftIconSvg}>
                <AngleBracketLeftWhite width={8.25} height={15.31} />
              </Pressable>
            )
          },
        }
      }
      case 'chartDisplay': {
        return {
          title: headerTitle,
          RightIcon: () => {
            return (
              <Pressable
                onPress={() => navigation.navigate('UserAccount')}
                wrapperStyle={profileView}>
                { false ? (
                  <Image
                    style={rightIconImage}
                    source={{ uri: `${URL}${userProfile}` }}
                  />
                ) : (
                  // <ProfileDrawerSVG width={40} height={40}/>
                  <Image style={{ width : 40 , height : 40 }} source={require('../../../../assets/images/profile.png')}/>
                )}
              </Pressable>
            )
          },
          SecondRightIcon: () => {
            return (
              <View style={secondRightpress}>
                {/* <InfoSVG width={20} height={20} /> */}
              </View>
            )
          },
          SecondLeftIcon: () => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate('Notifs', {
                    type: 'notif',
                  })
                }
                wrapperStyle={secondLeftSvg}>
                <NotifCounter />
              </Pressable>
            )
          },
          LeftIcon: () => {
            return (
              <Pressable
                wrapperStyle={leftIconSvg}
                onPress={() => navigation.goBack()}>
                <AngleBracketLeftWhite width={8.25} height={15.31} />
              </Pressable>
            )
          },
        }
      }
    }
  }

  const backonPress = () => {
    if (onPress) {
      onPress()
    } else {
      navigation.goBack()
    }
  }

  return {
    renderHeaderDetail,
  }
}

export default useComponent
