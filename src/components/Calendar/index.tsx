import { BasicColors, MainColors } from '../../common/index'
import { Text } from '../../components/index'
import { ms } from '../../helper/index'
import React, { forwardRef, memo } from 'react'
import { View } from 'react-native'
import DatePicker from 'react-native-modern-datepicker'
import useComponent from './hooks'
import { Props } from './models'
import styles from './styles'

const Calendar = forwardRef((props: Props, ref) => {
  const {
    containerView,
    calendarView,
    calendarHeaderView,
    dayText,
    calendarMainView,
    datePicker,
  } = styles
  const {
    oppositeCalendarStatus,
    calendarStatus,
    setDateSelected,
    dateSelected,
    mode = 'calendar',
    confirmDateCallback,
    setTimer,
    setDateSent,
    confirmonPress,
  } = props
  const {
    CalendarFooter,
    renderMonth,
    daySelected,
    yearSelected,
    setYearSelected,
    setMonth,
    month,
    setDaySelected,
    formattedDate,
    setFormattedDate,
    onTimeChange,
    onSelectedChange,
  } = useComponent({
    oppositeCalendarStatus,
    setDateSelected,
    setTimer,
    setDateSent,
    confirmonPress,
  })

  const monthName = renderMonth(month)
  return (
    <View style={calendarView}>
      <View style={calendarHeaderView}>
        <Text
          style={dayText}
          color={BasicColors.white}
          type="medium"
          size="medium">
          {daySelected} {monthName} {yearSelected}
        </Text>
      </View>
      <View style={calendarMainView}>
        <DatePicker
          mode={mode}
          onTimeChange={onTimeChange}
          onSelectedChange={onSelectedChange}
          options={{
            mainColor: MainColors.calendarHeader,
            textFontSize: ms(15, 0.3),
          }}
          minuteInterval={3}
          style={datePicker}
          isGregorian={false}
          current={formattedDate}
          selected={formattedDate}
        />
        {mode == 'calendar' && <CalendarFooter />}
      </View>
    </View>
  )
})

export default memo(Calendar)
