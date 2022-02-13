export interface Props {
  oppositeCalendarStatus?: () => any
  setDateSelected?: (value: any) => void
  calendarStatus?: boolean
  mode?: 'calendar' | 'time'
  dateSelected?: string
  confirmDateCallback?: any
  setTimer?: () => void
  confirmonPress: any
}

export interface hookProps {
  oppositeCalendarStatus: any
  setDateSelected: any
  currentEnglishDate: string
  currentPersianDate: string
}
