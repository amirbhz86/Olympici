import { GoalHeaderSVG } from '../../../assets/images/index'
import { BasicColors, strings, windowW } from '../../../common/index'
import { CommonHeader, Text } from '../../../components/index'
import { getTabBarHeight } from '../../../helper/index'
import React, { FC, memo } from 'react'
import { Animated, View } from 'react-native'
import useComponent from './hooks/useComponent'
import { Props } from './models'
import styles from './styles'

const GoalHeader: FC<Props> = memo((props) => {
  const { navigation, magicAnimation } = props

  const { wrapperViewHeight, wrapperViewShadow } = useComponent({
    navigation,
    magicAnimation,
  })

  const {
    wrapperView,
    statusBar,
    goalHeaderSvg,
    headerLayerView,
    purposeText,
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
              : windowW * 0.586 + 37 + getTabBarHeight(),
            shadowRadius: wrapperViewShadow,
          },
        ]}>
        <GoalHeaderSVG
          width={windowW}
          height={windowW * 0.65}
          style={goalHeaderSvg}
        />
        <View style={headerLayerView} />
        <CommonHeader
          navigation={navigation}
          headerType="fourIcon"
          style={{ position: 'absolute' }}
        />
        <Text
          color={BasicColors.white}
          style={purposeText}
          type="bold"
          size="headingTitle">
          {strings.exerciseOnPurpose}
        </Text>
      </Animated.View>
    </>
  );
});
export default memo(GoalHeader);
