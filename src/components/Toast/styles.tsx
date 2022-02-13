import { screenW } from '../../common/index'
import { SP } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  toastWrapperView: {
    width: screenW,
    minHeight: 60,
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingVertical: SP(15),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  messageText: {
    textAlign: 'center',
  },
})
