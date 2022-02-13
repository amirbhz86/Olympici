import React, { memo } from 'react'
import { View } from 'react-native'
import styles from './styles'
import { CalenderSVG, PlusSVG } from '../../../assets/icons/index'
import { CommonHeader, Text, WeekCircles } from '../../../components/index'
import { BasicColors, strings } from '../../../common/index'
import useComponent from './hooks'

const MyExercise = (props) => {
  const { navigation, setCalendarStatus, dateSelected } = props
  const {
    containerView,
    middlePartView,
    middleRightView,
    timeText,
    todayText,
    middleLeftView,
    squareView,
  } = styles
  const { MiddlePartOfHeader } = useComponent({
    setCalendarStatus,
    dateSelected,
    navigation,
  })
  return (
    <View style={containerView}>
      <CommonHeader
        navigation={navigation}
        headerType="myExercise"
        headerTitle={strings.myExercise}
      />
      <MiddlePartOfHeader />
      <WeekCircles />
    </View>
  )
}

export default memo(MyExercise)
