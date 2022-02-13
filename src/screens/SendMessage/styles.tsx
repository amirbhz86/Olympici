import { BasicColors, MainColors } from '../../common/index'
import { ms } from '../../helper/sizing'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: BasicColors.white,
  },
  titleTextInput: {
    borderRadius: 7,
    borderColor: MainColors.inputBorder,
  },
  innerButton: {
    backgroundColor: MainColors.primaryLighter,
    flexDirection: 'row-reverse',
    alignSelf  :'center' ,
  },
  whiteTelegramSvg: {
    marginLeft : ms(6.6, 0.5),
  },
  wrapperButton: {
    // position: 'absolute',
    bottom: 80,
  },
  wrapperScrollView: {
    flex: 1,
  },
})
