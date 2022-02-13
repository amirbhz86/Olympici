import { BasicColors, MainColors, windowH, windowW } from '../../common/index'
import { getTabBarHeight, ms } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  nextOrPerviousContainer: {
    position: 'absolute',
    left: ms(28, 0.5),
    bottom: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  prevPress: {
    marginRight: ms(13, 0.5),
    paddingVertical: 8,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextPress: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: ms(10, 0.5),
  },
  prevFadingView: {
    // marginLeft: ms(13, 0.5),
    position: 'absolute',
    // backgroundColor : 'blue',
    left: 8,
    width: 18,
    borderRadius: 9,
    height: 18,
  },
  nextItemSvg: {

  },
  tickSvg: {
    marginRight: 6,
  },
  doneView: {
    flexDirection: 'row',
    width: ms(98, 0.5),
    height: 29,
    backgroundColor: MainColors.primaryLighter,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26,
  },
  donePress: {
    position: 'absolute',
    bottom: 13,
    right: ms(20, 0.5),
    paddingVertical :  10 , 
    paddingHorizontal : 10 ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toDoPress: {
    position: 'absolute',
    bottom: 13,
    right : ms(20, 0.5),
    paddingVertical :  10 , 
    paddingHorizontal : 10 ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toDoView: {

    width: ms(98, 0.5),
    height: 29,
    backgroundColor: MainColors.accentDarker,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26,
  },
  nextFadingView: {
    // marginRight: ms(13, 0.5) ,
    position: 'absolute',
    right: 8,
    width: 18,
    borderRadius: 9,
    height: 18,
  },
  closePress: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginBottom: 5,
  },
  closeImage: {
    width: 30,
    height: 30,
  },
  prevItemSvg: {
  },
  containerView: {
    flex: 1,
    backgroundColor: BasicColors.white,
  },
  containerVideo: {
    position: 'absolute',
    justifyContent: 'center',
    // paddingTop : (windowH-500 -getTabBarHeight() )/2,
    width: windowW,
    height: windowH,
    flex: 1,
    backgroundColor: BasicColors.black,
  },
  commonHeader: {
    backgroundColor: MainColors.primary,
  },
})
