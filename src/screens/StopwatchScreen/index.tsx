
import { BackgroundStopwatchSVG } from '../../assets/images/index'
import { BasicColors, MainColors } from '../../common/colors'
import { strings } from '../../common/languages'
import {
  CommonHeader,
  Pressable,
  ScrollViewTwoColorInseting,
  Stopwatch,
} from '../../components/index'
import { useRedux } from '../../hooks/index'
import React from 'react'
import { View } from 'react-native'
import useComponent from './hooks'
import { Props } from './models'
import styles from './styles'
let stopwatchRef: any = React.createRef(null)

const StopwatchScreen = (props: Props) => {
  const {
    containerView,
    commonHeader,
    topView,
    customStopwatch,
    stopwatchContainer,
    lapPress,
    higherTopView,
  } = styles
  const { Threeoptions, LapsContainer, setLapArray, lapArray } = useComponent()
  const { Save, Get } = useRedux()
  const { stopwatchStatus } = Get().app
  const { navigation } = props
  return (
    <View style={containerView}>
       <CommonHeader
        navigation={navigation}
        headerType="myExercise"
        headerTitle={strings.stopwatch}
        style={commonHeader}
      />
      <ScrollViewTwoColorInseting
        topColor={MainColors.primary}
        bottomColor={BasicColors.white}>
      <View style={higherTopView}>
          <View style={topView}>
            <BackgroundStopwatchSVG width={250} height={250} style={{  marginTop : 35 ,zIndex: 200 }} />
             <Pressable
              disabled={stopwatchStatus == 'stop' ? true : false}
              onPress={() => stopwatchRef.current.addLap()}
              wrapperStyle={[
                lapPress,
                {
                  backgroundColor:
                    stopwatchStatus == 'stop'
                      ? MainColors.primaryFading
                      : undefined,
                },
              ]}
            />
            <View style={stopwatchContainer}>
              <Stopwatch
                ref={stopwatchRef}
                setLapArray={(value: any) => setLapArray(value)}
              />
            </View>
          </View>
        </View>
        <LapsContainer /> 
      </ScrollViewTwoColorInseting>
      <Threeoptions
        stopwatchStatus={stopwatchStatus}
        toggleStopwatch={() => stopwatchRef.current.toggleStopwatch()}
        resetStopwatch={() => stopwatchRef.current.resetStopwatch()}
        stopStopwatch={() => stopwatchRef.current.stopStopwatch()}
        addLap={() => stopwatchRef.current.addLap()}
      /> 
    </View>
  )
}

export default StopwatchScreen
