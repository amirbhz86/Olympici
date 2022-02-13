import {
  LapStopwatchSVG,
  PlayStopwatchSVG,
  RestartStopwatchSVG,
} from '../../../assets/icons/index'
import { BasicColors, MainColors } from '../../../common/colors'
import { Pressable, Text } from '../../../components/index'
import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import styles from '../styles'

export const useComponent = (props) => {
  const {
    threeOptionsView,
    obstacleView,
    loopsContainer,
    lapView,
    leftLapView,
    lineView,
    circlePlayView,
    squareView,
    obstacleLapView,
    lapsFlatList,
  } = styles
  const [lapArray, setLapArray] = useState<array>([{ value: 0, space: 0 }])

  const LapsContainer = () => {
    return (
      <View style={loopsContainer}>
        <LapsFlatList />
      </View>
    )
  }
  const Threeoptions = (props) => {
    const {
      stopwatchStatus,
      toggleStopwatch,
      resetStopwatch,
      stopStopwatch,
      addLap,
    } = props

    return (
      <View style={threeOptionsView}>
        <Pressable
          disabled={stopwatchStatus == 'start' ? false : true}
          onPress={addLap}>
          <LapStopwatchSVG style={{ zIndex: -80 }} />
          <View
            style={[
              {
                backgroundColor:
                  stopwatchStatus == 'start' ? undefined : MainColors.fading,
              },
              obstacleLapView,
            ]}></View>
        </Pressable>
        {stopwatchStatus == 'start' ? (
          <Pressable wrapperStyle={circlePlayView} onPress={stopStopwatch}>
            <View style={squareView} />
          </Pressable>
        ) : (
          <Pressable onPress={toggleStopwatch}>
            <PlayStopwatchSVG />
          </Pressable>
        )}

        <Pressable onPress={resetStopwatch}>
          <RestartStopwatchSVG />
        </Pressable>
      </View>
    )
  }
  const LapsFlatList = () => {
    return (
      <FlatList
        style={lapsFlatList}
        contentContainerStyle={{ backgroundColor: BasicColors.white }}
        data={lapArray}
        renderItem={renderLaps}
      />
    )
  }

  const renderLaps = ({
    item,
    index,
  }: {
    item: { value: any; space: number }
  }) => {
    let hourValue: any = parseInt((item.value / (60 * 60 * 1000)).toString())
    let hourMiliseconds: any = hourValue * 60 * 60 * 1000
    let minuteValue: any = parseInt(
      ((item.value - hourMiliseconds) / (60 * 1000)).toString(),
    )
    let minuteMiliseconds: any = minuteValue * 60 * 1000
    let secondValue: any = parseInt(
      ((item.value - hourMiliseconds - minuteMiliseconds) / 1000).toString(),
    )
    let finallValue = hourValue + ':' + minuteValue + ':' + secondValue

    let hourSpace: any = parseInt((item.space / (60 * 60 * 1000)).toString())
    let spaceHourMiliseconds = hourSpace * 60 * 60 * 1000
    let minuteSpace: any = parseInt(
      ((item.space - spaceHourMiliseconds) / (60 * 1000)).toString(),
    )
    let spaceMinuteMiliseconds = minuteSpace * 60 * 1000
    let secondSpace: any = parseInt(
      (
        (item.space - spaceHourMiliseconds - spaceMinuteMiliseconds) /
        1000
      ).toString(),
    )
    let finallSpace = hourSpace + ':' + minuteSpace + ':' + secondSpace
    return (
      <>
        {index > 1 && <View style={lineView} />}
        {index > 0 && (
          <View style={lapView}>
            <View style={leftLapView}>
              <Text
                type="medium"
                color={MainColors.lapText}
                size="headingTitle">
                Lap {index}
              </Text>
              <Text size="medium" color={MainColors.primaryLight}>
                {finallSpace}
              </Text>
            </View>
            <Text
              color={MainColors.primaryLight}
              size="headingLargeTitle"
              type="light">
              {finallValue}
            </Text>
          </View>
        )}
      </>
    )
  }
  return {
    Threeoptions,
    LapsContainer,
    lapArray,
    setLapArray,
  }
}

export default useComponent
