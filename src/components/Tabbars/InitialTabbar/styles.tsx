import { BasicColors, MainColors, windowW } from '../../../common/index'
import { ms, scale } from '../../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {

    width: windowW,
    height: ms(51, 0.5),
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: (5),
    paddingRight: (5),
    backgroundColor: MainColors.primary,
  },
  tabbarContainer: {
    height: ms(51, 0.5),
    width: windowW,
    backgroundColor: BasicColors.white
  },
  leftPartView: {
    backgroundColor  :'red' ,
    width: scale(167),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeView: {
    height: ms(51, 0.5),
    width: (windowW - ms(65, 0.5)) / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerView: {
    height: ms(51, 0.5),
    width: (windowW - ms(65, 0.5)) / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middlePress: {
    width: ms(57, 0.5),
    height: ms(57, 0.5),
    borderRadius: ms(29, 0.5),
    backgroundColor: MainColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleWhiteView: {
    width: ms(60, 0.5),
    height: ms(60, 0.5),
    borderRadius: ms(30, 0.5),
    marginBottom: ms(45, 0.5),
    backgroundColor: BasicColors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartView: {
    height: ms(51, 0.5),
    width: (windowW - ms(65, 0.5)) / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuView: {
    height: ms(51, 0.5),
    width: (windowW - ms(65, 0.5)) / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homePress: {
    width: ms(30, 0.5),
    height: ms(27, 0.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartPress: {
    width: ms(27, 0.5),
    height: ms(30, 0.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerPress: {
    width: ms(33, 0.5),
    height: ms(30, 0.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuPress: {
    width: ms(22, 0.5),
    height: ms(17, 0.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  normMenuPress: {
    width: ms(22, 0.5),
    height: ms(17, 0.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageView: {
    width: '25%' , 
    height:  '100%' ,
    // backgroundColor : "blue" ,
    justifyContent : 'center' ,
    alignSelf : "center" ,
  },
  contactView: {
    width: '25%' ,
    height:  '100%' , 
  // backgroundColor : 'yellow' ,
    justifyContent : 'center' ,
    alignSelf : "center" ,
  },
  authView: {
    width: '25%' ,
    height:  '100%' ,
    // backgroundColor  : "purple" ,
    justifyContent : 'center' ,
    alignSelf : "center" ,
  },
  homeContainerView: {
    width: '25%' ,
    height:  '100%' , 
    justifyContent : 'center' ,
    alignSelf : "center" ,
  },
  homeText: {
    textAlign : 'center' ,
  },
  homeContainer: {
    // width: ms(86, 0.5),
    // height: ms(29, 0.5),
    // borderRadius: ms(19, 0.5),
    // backgroundColor: BasicColors.white,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
})
