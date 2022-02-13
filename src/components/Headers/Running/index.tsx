import React, { memo } from 'react'
import { View , Image  } from 'react-native'
import styles from './styles'
import { windowW } from '../../../common/index'
import { LoginHeaderLayerSVG, LoginHeaderSVG, OlympiTextSVG } from '../../../assets/images/index'
import { ArrowRightSVG, OlympiIconSVG } from '../../../assets/icons/index'
import { Pressable , PressableRadius } from '../../../components/index'
import { ms } from '../../../helper/index'


export interface Props {
  hasBack?: boolean,
  navigation?: any
}

const RunningHeader = (props: Props) => {
  const { hasBack, navigation , backPress } = props
  const {
    topLayerHeaderView,
    LoginHeaderView,
    loginHeaderImage,
    arrowRightPress,
    loginHeaderLayerView,
    olympiTextImage,
    statusBar,
    olympiLogos,
    arrowWrapper ,
  } = styles

  return (
    <>
      <View style={statusBar} />
      <View style={topLayerHeaderView}>
        <View style={LoginHeaderView}>
          <LoginHeaderSVG
            style={loginHeaderImage}
            width={windowW}
            height={windowW * 0.7973}
          />
        </View>
        {hasBack && (
          <PressableRadius
          innerStyle={arrowRightPress}
            wrapperStyle={arrowWrapper}
            onPress={() =>{
                if ( backPress ) {
                  backPress()
                }else{
                  navigation && navigation.goBack()
                }
               }}>
            <Image style={{ width : ms(18) , height : ms(15.5)}} source={require('../../../assets/icons/arrow-right.png')}/>
          </PressableRadius>
        )}
        <View style={loginHeaderLayerView}>
          <LoginHeaderLayerSVG width={windowW} height={windowW * 0.7973} />
        </View>
        <View style={olympiLogos}>
        </View>
      </View>
    </>
  )
}

export default memo(RunningHeader)
