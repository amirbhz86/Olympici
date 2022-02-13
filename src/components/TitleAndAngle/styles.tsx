import { scale } from '../../helper/index'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  titleAndAngleView: {
    width: '100%',
    paddingRight: scale(14),
    paddingLeft: scale(11),
    marginTop: 16,
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  titleText: {
    maxWidth: '82%',
  },
})
