import { BasicColors, MainColors } from '../../common/index'
import { ms } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    width: ms(330, 0.5),
    alignSelf: 'center',
    shadowColor: MainColors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  closePress: {
    position: 'absolute',
    top: -2.5,
    left: ms(-2.5),
    justifyContent: 'center',
    alignItems: 'center',
    width: ms(35, 0.5),
    height: ms(35, 0.5),
  },
  closeSvg: {},
  modalHeaderView: {
    width: '100%',
    height: 53,
    backgroundColor: MainColors.modalHeader,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyView: {
    // height : 400 ,
    backgroundColor: BasicColors.white,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
})
