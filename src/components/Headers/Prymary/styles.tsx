import { BasicColors, MainColors } from '../../../common/index'
import { ms } from '../../../helper/index'
import { getTabBarHeight } from '../../../helper/statusBarHeight'
import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

export default StyleSheet.create({
  wrapperView: {
    backgroundColor: MainColors.primary,
    width: '100%',
    paddingRight: ms(22),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingBottom: 31,
    paddingTop: 26,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
  },
  oHeaderImage: {
    zIndex: -1000,
    top: -21,
    right: -43,
    position: 'absolute',
  },
  sendLanguageText: {
    position: 'absolute',
    top: 113,
    left: ms(22),
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
