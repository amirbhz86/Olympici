import { BasicColors, MainColors, windowW } from '../../../common/index'
import { getTabBarHeight, ms, scale } from '../../../helper/index'
import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

export default StyleSheet.create({
  wrapperView: {
    zIndex: -5,
    backgroundColor: MainColors.nearPrimary,
    width: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: 'row',
  },
  profileImage : {
    width: 37,
    height: 37,
    borderRadius: 18.5,
  },
  coudySvg: {
    position: 'absolute',
    top: 90,
    left: '3.5%',
  },
  oLogoSvg: {
    position: 'absolute',
    top: 12,
    right: scale(17),
  },
  olympicTextSvg: {
    position: 'absolute',
    top: ms(14),
    left: ms(19),
  },
  oHeaderImage: {
    top: -21,
    left: -43,
    position: 'absolute',
  },
  sendLanguageText: {
    position: 'absolute',
    top: 113,
    right: ms(22),
  },
  winnerCupSvg: {
    position: 'absolute',
    top: 5.9,
    left: (windowW - 62) / 2,
  },
  crowdImage: {
    position: 'absolute',
    height: 168.1,
    width: windowW * 1.05,
    top: -38.39,
    right: 0,
  },
  leftPressableRadius: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
  starImage: {
    width: 20,
    height: 19,
    position: 'absolute',
    top: 9.2,
    left: (windowW - 20) / 2,
  },
  nameAndThumbnailWrapperView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  notifSvg: {
    // paddingHorizontal : 7,
    // paddingVertical : 7 ,
    // backgroundColor : 'red' ,
    zIndex : 2000 ,
    position: 'absolute',
    top: 12,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    left: scale(20),
  },
  userSvg: {
    paddingHorizontal : 7,
    paddingVertical : 7 , 
    justifyContent : 'center' ,
    alignItems : 'center' ,
    position: 'absolute' ,
    top: 12 ,
    right: scale(23),
  },
  separateOfBackground: {
    width: windowW,
    height: 102,
    backgroundColor: MainColors.primaryDarker,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    position: 'absolute',
    top: 118,
    right: 0,
  },
  thumbnailPressableRadius: {
    padding: 5,
  },
  starSvg: {
    zIndex: 5,
    position: 'absolute',
    top: 9.2,
    left: (windowW - 20) / 2,
  },
  thumbnailImage: {
    borderRadius: 17.5,
    width: 35,
    height: 35,
  },
  nameText: {
    maxWidth: moderateScale(170),
    marginEnd: 10,
    marginBottom: -5,
    color: BasicColors.white,
  },
  statusBar: {
    backgroundColor: MainColors.primary,
    // backgroundColor : 'red' ,
    height: 0,
    width: '100%',
  },
})
