import { MainColors } from '../../common/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerWithoutFeed: {
    flex: 1,
    position: 'absolute',
    zIndex: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: MainColors.blackFading,
  },
})
