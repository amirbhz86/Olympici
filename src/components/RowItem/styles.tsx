import { BasicColors } from '../../common/index'
import { ms } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapperRowItem: {
    width: ms(330, 0.5),
    height: 42.5,
  },
  contentRowItem: {
    backgroundColor: BasicColors.white,
    width: ms(330, 0.5),

    height: 42.5,
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  iconAndTitleView: {
    flexDirection: 'row',
  },
  marginIcon: {
    marginLeft: 15,
  },
})
