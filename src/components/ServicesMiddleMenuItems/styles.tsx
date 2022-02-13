import { MainColors } from '../../common/index'
import { ms, scale } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  contentMiddleFlatList: {
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
  },
  middleMenuFlatList: {
    paddingHorizontal: (scale(335) - ms(306, 0.5) - 30) / 2,
    marginTop: 35,
    width: scale(335),
    alignSelf: 'center',
  },
  middleItemView: {
    shadowColor: MainColors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderWidth: 1,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 5,
    marginHorizontal: 5,
  },
})
//
