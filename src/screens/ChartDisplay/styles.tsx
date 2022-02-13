import { BasicColors, MainColors, windowW } from '../../common/index'
import { scale } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: BasicColors.white,
  },
  commonHeader: {
    position: 'absolute',
    top: 0,
  },
  numberText: {
    marginLeft: windowW / 2 - scale(125),
    marginBottom: 5,
    textAlign: 'left',
  },
  timeText: {
    marginTop: -20,
    textAlign: 'right',
    marginRight: windowW / 2 - scale(150),
  },
  styleDropdown: {
    fontFamily: 'Vazir',
    alignItems: 'center',
    color: BasicColors.white,
    paddingLeft: 15,
    paddingTop : 2 ,
    paddingRight: 7,
  },
  todayText: {
    position: 'absolute',
    bottom: 25,
    left: scale(24),
  },
  pickerDropdown: {
    width: 149,
    fontFamily: 'Vazir',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: MainColors.dropdownBorder,
  },
  arrowDownSvg: {
    position: 'absolute',
    left: -130,
    backgroundColor: 'red',
    top: 2,
    width: 20,
    height: 20,
  },
  itemTextDropdown: {
    height: 33.5,
    fontFamily: 'Vazir',
    textAlign: 'left',
  },
  titlePrymaryHeader: {
    position: 'absolute',
    top: 78,
    right: scale(22),
  },
  containerDropdown: {
    width: 149,
    height: 34,
    marginTop: -18,
    // backgroundColor : 'red',
    // position: 'absolute',
    // bottom: 18,
    // right: scale(22),
    // backgroundColor: MainColors.primary,
  },
  dropdownView: {
    width: 149,
    height: 34,
    position: 'absolute',
    bottom: 18,
    right: scale(22),
    backgroundColor: MainColors.primary,
    borderRadius: 10,
    borderColor: BasicColors.white,
    borderWidth: 1,
  },
})
