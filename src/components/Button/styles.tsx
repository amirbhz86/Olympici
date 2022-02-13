import { MainColors } from '../../common/index'
import { ms } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapperView: {
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowView : {
    flexDirection : 'row' ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
    zIndex  :2000 ,

  },
  firstScreensButton: {
    justifyContent: 'center',
    flexDirection : 'row' ,
    alignItems: 'center',
    height: 39,
    alignSelf: 'center',
    borderRadius : 25,
    width: ms(310),
    backgroundColor: MainColors.primaryLight,
  },

  registerButton: {
    height: 49,
    width: ms(330, 0.5),
    backgroundColor: MainColors.primaryLighter,
    borderRadius: 26,
    // marginTop : 42 ,
    alignSelf: 'center',
    justifyContent: 'center',
  },
})
