import { BasicColors, MainColors } from '../../common/index'
import { ms, scale } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapperChooseSport: {
    borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
  },
  topMenuHeaderPress: {
    borderRadius: 13,
  },
  chooseSportContent: {
    width: '100%',
    height: 42.5,
    paddingHorizontal: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pointToLeftSvg: {
    marginTop: 20.6,
  },
  chooseSportText: {
    marginTop: 15,
  },
  topMenuItem: {
    marginHorizontal: (scale(330) - ms(306)) / 6,
    borderWidth: 1,
  },
  lineView: {
    width: ms(300, 0.5),
    height: 0.8,
    backgroundColor: MainColors.linePrimary,
    alignSelf: 'center',
  },
  topMenu: {
    width: ms(330, 0.5),
    // paddingVertical : 5 ,
    zIndex: 5,
    backgroundColor: BasicColors.white,
    borderRadius: 13,
    shadowColor: MainColors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignSelf: 'center',
  },
})
