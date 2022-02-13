import { ms } from '../../helper/sizing'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    width: ms(316, 0.5),
    alignSelf: 'center',
  },
  firstRowView: {
    width: ms(316, 0.5),
    height: 24,
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textText: {
    marginTop: 10,
    textAlign: 'left',
  },
  rightFirstRowView: {
    flexDirection: 'row-reverse',
  },
  notifLockSvg: {
    marginRight : ms(9),
    alignSelf: 'center',
  },
  textView: {
    width: ms(293, 0.5),
  },
})
