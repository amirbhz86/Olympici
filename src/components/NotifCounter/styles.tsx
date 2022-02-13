import { BasicColors, MainColors } from '../../common/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  counterView: {
    width: 7,
    height: 7,
    backgroundColor: MainColors.accentDarker,
    position: 'absolute',
    left: 11,
    top: 3,
    borderRadius: 3.5,
    borderWidth: 0.4,
    borderColor: BasicColors.white,
  },
})
