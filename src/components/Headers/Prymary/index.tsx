import { ArrowRightSVG } from '../../../assets/icons/index'
import { OHeaderSVG } from '../../../assets/images/index'
import { BasicColors, FONT_SIZES, FONT_TYPE, MainColors } from '../../../common/index'
import { PressableRadius, Text , Pressable } from '../../../components/index'
import { getTabBarHeight , ms } from '../../../helper/index'
import React, { FC, memo } from 'react'
import { Animated, Image, View } from 'react-native'
import useComponent from './hooks/useComponent'
import { Props } from './models'
import styles from './styles'

const PrymaryHeader: FC<Props> = memo((props) => {
  
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
    titleStyle,
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
    leftPressableRadius,
    nameAndThumbnailWrapperView,
    thumbnailPressableRadius,
    thumbnailImage,
    nameText,
    statusBar,
    oHeaderImage,
    sendLanguageText,
  } = styles

  return (
    <>
      <View style={statusBar} />
      <Animated.View
        style={[
          wrapperView,
          {
            height: magicAnimation
              ? wrapperViewHeight
              : 178 + getTabBarHeight(),
            shadowRadius: wrapperViewShadow,
          },
        ]}>
        <Pressable
          rippleBackgroundColor={MainColors.border}
          wrapperStyle={leftPressableRadius}
          onPress={() => onLeftButtonPressed(hasBack, drawerRef)}
          borderless>
          {hasBack ?  <Image style={{ width : ms(18) , height : ms(15.5)}} source={require('../../../assets/icons/arrow-right.png')}/> : null}
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
            <PressableRadius
              wrapperStyle={thumbnailPressableRadius}
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
            </PressableRadius>
          </View>
        )}
        <OHeaderSVG width={174} height={174} style={oHeaderImage} />
        <Text
          color={BasicColors.white}
          size={'heading'}
          type={'bold'}
          style={[sendLanguageText, titleStyle]}>
          {title}
        </Text>
        {children}
      </Animated.View>
    </>
  );
});
export default memo(PrymaryHeader);
