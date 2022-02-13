import { AthleteCalendarSVG, PlusSVG } from '../../../../assets/icons/index'
import { BasicColors, strings } from '../../../../common/index'
import { Pressable, Text } from '../../../../components/index'
import { englishToPersianNum } from '../../../../helper/englishToPersianNum'
import { toFarsiNumber } from '../../../../helper/index'
import React from 'react'
import { View } from 'react-native'
import { getFormatedDate } from 'react-native-modern-datepicker'
import styles from '../styles'

let todaySplited = getFormatedDate(new Date(), 'jYYYY/jMM/jDD').split('/')
let todayJalali =
  toFarsiNumber(todaySplited[0]) +
  '/' +
  toFarsiNumber(todaySplited[1]) +
  '/' +
  toFarsiNumber(todaySplited[2])

const useComponent = (props) => {
  const {
    middleLeftView,
    middlePartView,
    squareView,
    middleRightView,
    timeText,
    todayText,
    calendarPress,
  } = styles
  const { setCalendarStatus, dateSelected, navigation } = props

  const MiddlePartOfHeader = () => {
    return (
      <View style={middlePartView}>
        <Pressable
          onPress={() => navigation.navigate('MyPrograms')}
          wrapperStyle={middleLeftView}>
          <Text color={BasicColors.white} style={{ marginRight: 5 }}>
            {strings.customProgram}
          </Text>
          <View style={squareView}>
            <PlusSVG />
          </View>
        </Pressable>
        <View style={middleRightView}>
          <Pressable
            // onPress={() => setCalendarStatus(true)}
            wrapperStyle={calendarPress}>
            <Text style={timeText} color={BasicColors.white}>
              { new Date().getFullYear()+ '/' + new Date().getMonth()+ '/' + new Date().getDate()} 
              {/* {englishToPersianNum(dateSelected , false )} */}
            </Text>
            {todayJalali == englishToPersianNum(dateSelected) && (
              <Text style={todayText} color={BasicColors.white}>
                {strings.today}
              </Text>
            )}
            <AthleteCalendarSVG />
          </Pressable>
        </View>
      </View>
    )
  }
  return {
    MiddlePartOfHeader,
  }
}

export default useComponent
