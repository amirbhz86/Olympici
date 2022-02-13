import { ArrowRightSVG, NotifSVG, UserSVG } from '../../../assets/icons/index'
import { CloudyBackgroundSVG, WinnerCupSVG, ProfileDrawerSVG } from '../../../assets/images/index'
import { BasicColors, FONT_SIZES, FONT_TYPE, MainColors, log } from '../../../common/index'
import { Pressable, Text, NotifCounter } from '../../../components/index'
import { useRedux } from '../../../hooks/index'
import React, { FC, memo } from 'react'
import { Animated, Image, View } from 'react-native'
import { URL } from '../../../api/useApiCore'
import useComponent from './hooks/useComponent'
import { Props } from './models'
import styles from './styles'

const ChampionHeader: FC<Props> = memo((props) => {
  const {
    navigation,
    hideLogo,
    isMainHeader,
    hasBack,
    drawerRef,
    magicAnimation,
    centerTitle,
    onThumbnailPressed,
    children,
    title,
  } = props

  const {
    user,
    onLeftButtonPressed,
    centerTitleOpacity,
    wrapperViewHeight,
    wrapperViewShadow,
  } = useComponent({
    navigation,
    magicAnimation,
  })

  const {
    wrapperView,
    leftPressable,
    nameAndThumbnailWrapperView,
    thumbnailPressable,
    thumbnailImage,
    nameText,
    statusBar,
    oHeaderImage,
    sendLanguageText,
    oLogoSvg,
    olympicTextSvg,
    crowdImage,
    separateOfBackground,
    coudySvg,
    winnerCupSvg,
    starSvg,
    notifSvg,
    userSvg,
    starImage,
    profileImage,
  } = styles
  const { Get } = useRedux()
  const { userProfile } = Get().user


  return (
    <>
      <View style={statusBar} />
      <Animated.View
        style={[
          wrapperView,
          {
            height: magicAnimation ? wrapperViewHeight : 220,
            shadowRadius: wrapperViewShadow,
          },
        ]}>
        <Pressable
          rippleBackgroundColor={MainColors.border}
          wrapperStyle={leftPressable}
          onPress={() => onLeftButtonPressed(hasBack, drawerRef)}
          borderless>
          {hasBack ? <ArrowRightSVG width={18} height={18} /> : null}
        </Pressable>
        {centerTitle && (
          <Animated.Text
            style={[
              nameText,
              {
                fontSize: FONT_SIZES.large,
                fontFamily: FONT_TYPE.bold,
                opacity: magicAnimation ? centerTitleOpacity : 0,
                marginBottom: 2,
              },
            ]}>
            {centerTitle}
          </Animated.Text>
        )}
        {!isMainHeader && !hideLogo && null}
        {isMainHeader && (
          <View style={nameAndThumbnailWrapperView}>
            <Text
              size={'large'}
              type={'bold'}
              numberOfLines={1}
              style={nameText}>
              {user.fullName}
            </Text>
            <Pressable
              wrapperStyle={thumbnailPressable}
              rippleBackgroundColor={MainColors.border}
              onPress={onThumbnailPressed}
              borderless>
              {isMainHeader && user.avatar !== null ? (
                <Image
                  source={{ uri: user.avatar }}
                  resizeMode="cover"
                  style={thumbnailImage}
                />
              ) : null}
            </Pressable>
          </View>
        )}

        <Image style={starImage} source={require('../../../assets/images/star.png')} />
        <Image
          style={crowdImage}
          source={require('../../../assets/images/crowdChampionHeader.png')}
        />
        <View style={separateOfBackground} />
        <Pressable
          onPress={() => navigation.navigate('UserAccount')}
          wrapperStyle={userSvg}>
          <Image
            style={{ width: 40, height: 40 , bottom : 5  }}
            source={require('../../../assets/images/profile.png')}
          />
          {/* {userProfile!==null 
          ? <Image style={profileImage} source={{ uri : `${URL}${userProfile}`}}/>
          : <ProfileDrawerSVG width={40} height={40}/>
          } */}
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('Notifs', { type: 'notif' })}
          wrapperStyle={notifSvg}>
          <NotifCounter />
        </Pressable>
        <CloudyBackgroundSVG height={148.75} width={'93%'} style={coudySvg} />
        <WinnerCupSVG width={62} height={214.9} style={winnerCupSvg} />
        <Text
          color={BasicColors.white}
          size={'heading'}
          type={'bold'}
          style={sendLanguageText}>
          {title}
        </Text>
        {children}
      </Animated.View>
    </>
  );
});
export default memo(ChampionHeader);
