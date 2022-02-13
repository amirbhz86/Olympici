import { MainColors } from '../../common/index'
import { ms } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineView: {
    width: ms(150),
    height: 1,
    backgroundColor: MainColors.line,
  },
  circleView: {
    width: ms(6),
    height: ms(6),
    borderRadius: ms(3),
    backgroundColor: MainColors.line,
    marginHorizontal: 2.5,
  },
})
