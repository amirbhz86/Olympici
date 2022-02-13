import { MainColors } from '../../common/index'
import { ms, scale } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  contentBottomFlatList: {
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
  },
  bottomMenuFlatList: {
    marginTop: 7,
    marginBottom: 37,
    paddingHorizontal: (scale(330) - ms(306, 0.5) - 30) / 2,
    width: scale(330),
    alignSelf: 'center',
  },
  bottomItemView: {
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
