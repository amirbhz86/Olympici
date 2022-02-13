import { MainColors, windowW } from '../../../common/index'
import { getTabBarHeight, ms, scale, SP } from '../../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  topLayerHeaderView: {
    height: scale(180),
    backgroundColor: 'red',
    width: windowW,
  },
  statusBar: {
    zIndex: 100,
    backgroundColor: MainColors.primary,
    height: 0,
    width: '100%',
  },
  LoginHeaderView: {
    zIndex: -100,
    marginTop: SP(-32),
  },
  olympiTextImage: {
    marginTop: ms(6),
    marginLeft: ms(7),
  },
  olympiLogos: {
    zIndex: 5,
    flexDirection: 'row',
    position: 'absolute',
    top: '34%',
    left: scale(135),
  },
  loginHeaderLayerView: {
    marginTop: -32,
    position: 'absolute',
    zIndex: 4,
  },

  loginHeaderImage: {
    zIndex: 0,
  },
  arrowRightPress: {
    width: 40,
    height: 40 , 
    justifyContent : 'center' ,
    alignItems : 'center' ,
  },
  arrowWrapper : {
    zIndex: 5,
    // width: 40,
    // height: 40 , 
    // backgroundColor : 'red' ,
    borderRadius : 20 , 
    position: 'absolute',
    left: scale(14),
    top: '13.8%',
  },
})
