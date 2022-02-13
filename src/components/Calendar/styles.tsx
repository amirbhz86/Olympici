import { BasicColors, MainColors } from '../../common/index'
import { ms, scale } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: BasicColors.white,
  },
  confirmWrapperPress: {
    width: 35,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerHeader: {
    marginTop: -25,
    width: '100%',
    height: 59,
    backgroundColor: BasicColors.white,
    paddingLeft: 26,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  calendarHeaderView: {
    justifyContent: 'center',
    width: '100%',
    height: 77,
    backgroundColor: MainColors.calendarHeader,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  datePicker: {
    width: ms(300, 0.5),
    alignSelf: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  calendarMainView: {
    width: '100%',
  },
  dayText: {
    textAlign: 'right',
    marginRight: scale(22),
  },
  calendarView: {
    width: ms(300, 0.5),
    borderRadius: 10,
  },
})
