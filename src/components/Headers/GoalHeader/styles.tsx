import { BasicColors, MainColors, windowW } from '../../../common/index'
import { getTabBarHeight, ms, scale } from '../../../helper/index'
import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

export default StyleSheet.create({
  wrapperView: {
    backgroundColor: MainColors.primary,
    width: '100%',
    marginRight: -100 ,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  purposeText: {
    position: 'absolute',
    top: scale(70),
  },
  headerLayerView: {
    width: windowW,
    height: windowW * 0.586 + getTabBarHeight(),
    backgroundColor: MainColors.goalHeader,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
  leftPressableRadius: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
  nameAndThumbnailWrapperView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  thumbnailPressableRadius: {
    padding: 5,
  },
  goalHeaderSvg: {
    position: 'absolute',
    top: scale(-50),
    left: 0,
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
    height: 0,
    width: '100%',
  },
})
