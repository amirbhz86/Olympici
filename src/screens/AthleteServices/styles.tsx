import { BasicColors, MainColors, windowW } from '../../common/index'
import { ms, scale } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: BasicColors.white,
  },
  wrapperChooseSport: {
    borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
  },
  chooseSportContent: {
    width: '100%',
    height: 42.5,
    paddingHorizontal: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineView: {
    width: '91%',
    height: 0.8,
    backgroundColor: MainColors.linePrimary,
    alignSelf: 'center',
  },
  middleItemView: {
    shadowColor: MainColors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  topMenuItem: {
    marginHorizontal: (scale(330) - ms(306)) / 6,
    borderWidth: 1,
  },
  middleMenuFlatList: {
    paddingHorizontal: (scale(330) - ms(306) - 30) / 2,
    marginTop: 35,
    width: scale(330),
    alignSelf: 'center',
  },
  choosingSportContainer: {
    width: ms(330, 0.5),
    backgroundColor: BasicColors.white,
    borderRadius: 13,

    alignSelf: 'center',
  },
  olimpiciServicesText: {
    marginLeft: (windowW - ms(306, 0.5) - 20) / 2,
    marginTop: 31,
    textAlign: 'left',
  },
  pointToLeftSvg: {
    marginTop: 20.6,
  },
  chooseSportText: {
    marginTop: 15,
  },
  styleScrollView: {
    zIndex: 5,
    marginTop: -67,
  },
  topMenu: {
    width: scale(330),
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
