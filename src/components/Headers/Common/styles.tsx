import { BasicColors, windowW } from '../../../common/index'
import { scale } from '../../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    height: 67,
    width: windowW,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userWrapperPress: {
    // width: 40,
    // height: 40,
    paddingVertical : 7 , 
    paddingHorizontal : 7 ,
    // backgroundColor : 'red' ,
    top : 5  ,
    position: 'absolute',
    right: scale(13.6) + 10 ,
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
    left: scale(82),
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
  profileView: {
    position: 'absolute',
    top: 6,
    right: scale(22),
    zIndex : -200 ,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal : 7 , 
    paddingVertical : 7 ,
    // backgroundColor: BasicColors.white,
  },
  secondLeftSvg: {
    // backgroundColor : 'red' ,
    position: 'absolute',
    zIndex: 20000,
    width: 50,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    left: scale(55.5),
  },
  searchSvg: {
    position: 'absolute',
    right: 57.7,
  },
  leftIconSvg: {
    position: 'absolute',
    left: scale(13.6),
    width: 40.3,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIconContentPress: {
    width: 12.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
