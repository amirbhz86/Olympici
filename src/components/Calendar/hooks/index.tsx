import { MainColors, strings } from '../../../common/index'
import { Pressable, Text } from '../../../components/index'
import { toFarsiNumber } from '../../../helper/toFarsiNumber'
import React, { useState } from 'react'
import { View } from 'react-native'
// import hookProps from '../models'
import styles from '../styles'
let currentEnglishDate = '',
  currentPersianDate = ''

export const useComponent = (props: any) => {
  const {
    oppositeCalendarStatus,
    setDateSelected,
    setTimer,
    confirmonPress,
  } = props
  const { footerHeader, confirmWrapperPress } = styles
  const [month, setMonth] = useState<string | undefined>(undefined)
  const [yearSelected, setYearSelected] = useState(undefined)
  const [daySelected, setDaySelected] = useState(undefined)
  const [formattedDate, setFormattedDate] = useState('')


  const onSelectedChange = (date: string) => {
    currentEnglishDate = date
    let assembleDate = ''
    let yearSelectedVariable = toFarsiNumber(date.split('/')[0])
    let monthVariable = toFarsiNumber(date.split('/')[1])
    let dayVariable = toFarsiNumber(date.split(' ')[0].split('/')[2])
    assembleDate =
      yearSelectedVariable + '/' + monthVariable + '/' + dayVariable
    currentPersianDate = assembleDate
    setYearSelected(toFarsiNumber(date.split('/')[0]))
    setMonth(date.split('/')[1])
    setDaySelected(toFarsiNumber(date.split(' ')[0].split('/')[2]))
  }

  const onTimeChange = (date: string) => {
    let splited = date.split(':')
    let persianDate =
      toFarsiNumber(splited[0]) + ' : ' + toFarsiNumber(splited[1])
    setTimer(persianDate)
    oppositeCalendarStatus()
  }

  const renderMonth = (monthNumber: string | undefined) => {
    switch (monthNumber) {
      case '01':
        return 'فروردین'
      case '02':
        return 'اردیبهشت'
      case '03':
        return 'خرداد'
      case '04':
        return 'تیر'
      case '05':
        return 'مرداد'
      case '06':
        return 'شهریور'
      case '07':
        return 'مهر'
      case '08':
        return 'آبان'
      case '09':
        return 'آذر'
      case '10':
        return 'دی'
      case '11':
        return 'بهمن'
      case '12':
        return 'اسفند'
    }
  }

  const CalendarFooter = () => {
    return (
      <View style={footerHeader}>
        <Pressable
          wrapperStyle={confirmWrapperPress}
          onPress={() => {
            oppositeCalendarStatus()
            setFormattedDate(currentEnglishDate)
            setDateSelected(currentPersianDate)
            confirmonPress && confirmonPress()
          }}>
          <Text color={MainColors.linePrimary}>{strings.confirm}</Text>
        </Pressable>
      </View>
    )
  }

  return {
    renderMonth,
    CalendarFooter,
    yearSelected,
    daySelected,
    setYearSelected,
    setDaySelected,
    month,
    setMonth,
    formattedDate,
    setFormattedDate,
    onTimeChange,
    onSelectedChange,
  }
}

export default useComponent
