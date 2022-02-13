import { BasicColors, MainColors } from '../../common/index'
import { ms } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapperView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconWrapperView: {
    width: ms(17, 0.5),
    height: ms(17, 0.5),
    borderWidth: 1,
    borderColor: MainColors.accentLight,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapperView: {
    flexDirection: 'row',
    marginStart: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: {
    fontSize: 12,
    color: BasicColors.white,
  },
})
