import { ms } from '../../helper/sizing'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    width: ms(308, 0.5),
    alignSelf: 'center',
  },
  todayRecordText: {
    textAlign: 'right',
    marginRight: 7,
  },
  leftPartView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstRowView: {
    width: ms(308, 0.5),
    height: 24,
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightPartView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textText: {
    marginTop: 10,
    marginRight: 50,
    textAlign: 'right',
  },
  rightFirstRowView: {
    flexDirection: 'row',
  },
  textView: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    width: ms(308, 0.5),
    flexWrap: 'wrap',
    marginTop: 8,
  },
  recordText: {
    flexDirection: 'row',
    textAlign: 'right',
    maxWidth: ms(308, 0.5),
  },
  introText: {
    marginLeft: 50,
    textAlign: 'right',
  },
})
