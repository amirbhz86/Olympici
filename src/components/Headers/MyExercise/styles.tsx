import { BasicColors, MainColors, windowW } from '../../../common/index'
import { scale } from '../../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    height: 231,
    width: windowW,
    backgroundColor: MainColors.primary,
    borderBottomRightRadius: 40,
  },
  calendarPress: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical : 7 ,
  },
  squareView: {
    width: 21,
    height: 20.3,
    backgroundColor: BasicColors.white,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middlePartView: {
    height: 80,
    width: windowW,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(15),
    justifyContent: 'space-between',
  },
  middleLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical : 10 ,

  },
  middleRightView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    marginRight: 5,
    marginTop: 10,
  },
  todayText: {
    marginRight: 10,
    marginTop: 10,
  },
})
