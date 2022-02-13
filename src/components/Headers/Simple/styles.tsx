import { BasicColors, MainColors, windowW } from '../../../common/index'
import { getTabBarHeight, ms, scale } from '../../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  statusBarView: {
    height: 0,
    width: '100%',
    backgroundColor: MainColors.primary,
  },
  leftArrowPress : {
    width : 28 , 
    height : 28 ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
  },
  containerView: {
    backgroundColor: MainColors.primary,
    height: 70,
    width: windowW,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: ms(20, 0.5),
    alignItems: 'center',
  },
  rightView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  profilePress: {
    marginLeft: ms(9, 0.5),
    width: ms(40, 0.5),
    height: ms(40, 0.5),
    borderRadius: ms(20, 0.5),
  },
  userWrapperPress: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIconImage: {
    width: 37,
    height: 37,
    borderRadius: 18.5,
  },
  secondRightpress: {
    position: 'absolute',
    left: scale(74),
  },
  profileView: {
    position: 'absolute',
    top: 13,
    right: scale(22),
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BasicColors.white,
  },
  secondLeftSvg: {
    position: 'absolute',
    width: 20,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    left: scale(41.5),
  },
  searchSvg: {
    position: 'absolute',
    right: 48.7,
  },
  leftIconSvg: {
    position: 'absolute',
    left: scale(18.6),
    width: 12.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIconContentPress: {
    width: 12.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
