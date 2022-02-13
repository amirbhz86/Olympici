import { windowH } from '../../common/index'
import { ms } from '../../helper/sizing'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    height: '100%',
    marginTop: (windowH - 231 - ms(51, 0.5) - 252 - 107) / 2,
    alignItems: 'center',
  },
  titleText: {
    textAlign: 'center',
  },
})
