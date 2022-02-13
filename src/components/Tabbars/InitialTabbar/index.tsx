import {
  AboutUsSVG,
  AuthSVG,
  ContactUsSVG,
  HomeTabbarSVG,
  AboutUsPurpleSVG,
  AuthtabBarPurpleSVG,
  HomeTabbarWhiteSVG,
  ContactUsPurpleSVG,
} from '../../../assets/icons/index'
import { BasicColors, MainColors, strings } from '../../../common/index'
import { Pressable, PressableRadius, Text } from '../../../components/index'
import { ms } from '../../../helper/index'
import { useRedux } from '../../../hooks/index'
import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationState } from 'react-navigation'
import useComponent from './hooks'
import { Props } from './models'
import styles from './styles'

const AthleteTabbar = (props: Props) => {
  const getActiveRouteState = function (
    route: NavigationState,
  ): NavigationState {
    if (
      !route.routes ||
      route.routes.length === 0 ||
      route.index >= route.routes.length
    ) {
      return route
    }

    const childActiveRoute = route.routes[route.index] as NavigationState
    return getActiveRouteState(childActiveRoute)
  }

  const {
    containerView,
    homeView,
    timerView,
    middleWhiteView,
    chartView,
    menuView,
    menuPress,
    chartPress,
    timerPress,
    homePress,
    normMenuPress,
    middlePress,
    leftPartView,
    homeContainer,
    homeText,
    tabbarContainer,
    messageView,
    contactView,
    authView,
    homeContainerView,
  } = styles
  const { navigation } = props
  let {
    addToProgram,
  } = useComponent(props)
  const { Get, Save } = useRedux()
  const { hideTabbar ,  selectedTab } : any = Get().app
  let route = navigation.dangerouslyGetState()
  let routeName = route.routeNames[route.index]
  const {
    messageInnerStyle, contactInnerStyle, contactWrapperStyle, messageWrapperStyle
    , authWrapperStyle, authInnerStyle, homeInnerStyle, homeWrapperStyle
  } = funStyles(selectedTab)

  const HomeIcon = () => {
    return (
      <>
        {selectedTab == 'Home' &&
          <Text type="bold" size="xSmall" style={homeText}>
            {strings.home}
          </Text>
        }

      </>
    )
  }

  const tabPress = (tab: any) => {
    switch (tab) {
      case 'AuthStack':
        Save({ selectedTab : 'Auth' },'app')
        navigation.navigate(tab)
        return;
      case 'Home':
        Save({ selectedTab : 'Home' },'app')
        navigation.navigate(tab)
        return;
      case 'SendMessage':
        Save({ selectedTab : 'Message' },'app')
        navigation.navigate(tab)
        return;
      case 'ContactUs':
        Save({ selectedTab : 'ContactUs' },'app')
        navigation.navigate(tab)
        return;

      default: return;
    }
  }

  if (!hideTabbar) {
    return (
      <View style={tabbarContainer}>
        <View style={containerView}>
          <View style={messageView}>
            <PressableRadius
              onPress={() => tabPress('SendMessage')}
              innerStyle={messageInnerStyle}
              wrapperStyle={messageWrapperStyle}>
                {
                  selectedTab=='Message'
                  ? <ContactUsPurpleSVG width={ ms(21, 0.5)} height={ms(21, 0.5)}/>
                  : <ContactUsSVG width={ms(21, 0.5)} height={ms(21, 0.5)} />
                }
              {/* {selectedTab == 'Message' && <Text size='xSmall'> Send message</Text>} */}
            </PressableRadius>
          </View>
          <View style={contactView}>
            <PressableRadius
              onPress={() => tabPress('ContactUs')}
              innerStyle={contactInnerStyle}
              wrapperStyle={contactWrapperStyle}>
              {selectedTab == 'ContactUs'
                ? <AboutUsPurpleSVG width={ms(21, 0.5)} height={ms(21, 0.5)} />
                : <AboutUsSVG width={ms(21, 0.5)} height={ms(21, 0.5)} />
              }

              {/* {selectedTab == 'ContactUs' && <Text size='xSmall'> Contact us</Text>} */}
            </PressableRadius>
          </View>
          <View style={authView}>
            <PressableRadius
              onPress={() => tabPress('AuthStack')}
              innerStyle={authInnerStyle}
              wrapperStyle={authWrapperStyle}>
                { selectedTab=='Auth'  
                ? <AuthtabBarPurpleSVG width={ms(20, 0.5)} height={ms(20, 0.5)} /> 
                : <AuthSVG width={ms(20, 0.5)} height={ms(20, 0.5)} />
                }
              
              {/* {selectedTab == 'Auth' && <Text size='xSmall'> Sign in</Text>} */}
            </PressableRadius>
          </View>
          <View style={homeContainerView}>
            <PressableRadius
              innerStyle={homeInnerStyle}
              onPress={() => tabPress('Home')}
              wrapperStyle={homeWrapperStyle}>
                { selectedTab=='Home' 
                ? <HomeTabbarSVG width={ms(20, 0.5)} height={ms(20, 0.5)} />
                : <HomeTabbarWhiteSVG width={ms(20, 0.5)} height={ms(20, 0.5)} />
                }
              {/* {selectedTab == 'Home' &&
                <Text type="bold" size="xSmall" style={homeText}>
                  {strings.home}
                </Text>} */}
            </PressableRadius>
          </View>
        </View>
      </View>
    )
  } else {
    return <></>
  }
}

export default memo(AthleteTabbar)

const funStyles = (selectedTab: any) => {
  return (
    StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      messageInnerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: selectedTab == 'Message' ? BasicColors.white : MainColors.primary,
        paddingHorizontal: selectedTab == 'Message' ? 8 : 10,
        paddingTop : selectedTab == 'Message' ? 8 : 10 , 
        paddingBottom: selectedTab == 'Message' ? 8 : 10,
        borderRadius: 20,
      },
      contactInnerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: selectedTab == 'ContactUs' ? 8 : 10,
        paddingVertical: selectedTab == 'ContactUs' ? 8 : 10,
        backgroundColor: selectedTab == 'ContactUs' ? BasicColors.white : MainColors.primary,
        borderRadius: 20,
      },
      contactWrapperStyle: {
        borderRadius: 20,
        position: 'absolute',
        alignSelf: "center",
      },
      messageWrapperStyle: {
        borderRadius: 20,
        position: 'absolute',
        alignSelf: "center",
      },
      authInnerStyle: {
        backgroundColor: selectedTab == 'Auth' ? BasicColors.white : MainColors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: ms(30, 0.5),
        height: ms(30, 0.5),
        borderRadius: 20,
      },
      authWrapperStyle: {
        borderRadius: 20,
        position: 'absolute',
        alignSelf: "center",
      },
      homeInnerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: selectedTab == 'Home' ? BasicColors.white : MainColors.primary,
        paddingTop : selectedTab == 'Home' ?  8 : 10 ,
        paddingHorizontal: selectedTab == 'Home' ? 8  : 10,
        paddingBottom: selectedTab == 'Home' ? 8 : 10 ,
      },
      homeWrapperStyle: {
        borderRadius: 20,
        position: 'absolute',
        alignSelf: "center",
      },
    })
  )
}
