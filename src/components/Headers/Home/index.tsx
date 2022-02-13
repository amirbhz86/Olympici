import { ArrowRightSVG  } from '../../../assets/icons/index'
import { OLogoSVG, OlympiTextSVG , OlympiciEnglishSVG } from '../../../assets/images/index'
import { BasicColors, FONT_SIZES, FONT_TYPE, MainColors } from '../../../common/index'
import { PressableRadius, Text } from '../../../components/index'
import React, { FC, memo } from 'react'
import { Animated, Image, View } from 'react-native'
import useComponent from './hooks/useComponent'
import { Props } from './models'
import styles from './styles'

const HomeHeader: FC<Props> = memo((props) => {
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
    leftPressableRadius,
    nameAndThumbnailWrapperView,
    thumbnailPressableRadius,
    thumbnailImage,
    nameText,
    statusBar,
    oHeaderImage,
    sendLanguageText,
    oLogoSvg,
    olympicTextSvg,
  } = styles

  return (
    <>
      <View style={statusBar} />
      <Animated.View
        style={[
          wrapperView,
          {
            height: magicAnimation ? wrapperViewHeight : 178,
            shadowRadius: wrapperViewShadow,
          },
        ]}>
        <PressableRadius
          rippleBackgroundColor={MainColors.border}
          wrapperStyle={leftPressableRadius}
          onPress={() => onLeftButtonPressed(hasBack, drawerRef)}
          borderless>
          {hasBack ? <ArrowRightSVG width={18} height={18} /> : null}
        </PressableRadius> 
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
        <OLogoSVG style={oLogoSvg} width={25} height={31.9} />
        <Image style={olympicTextSvg} source={require('../../../assets/images/olympiciTextEnglish.png')}/>
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
export default memo(HomeHeader);
