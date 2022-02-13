import { BasicColors } from '../../common/index'
import { ms } from '../../helper/index'
import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapperItem: {
    width: ms(102, 0.5),
    backgroundColor: BasicColors.white,
    borderRadius: 13,
  },
  contentItem: {
    flex: Platform.OS === 'android' ? 1 : undefined,
    width: ms(102, 0.5),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 17,
    paddingBottom: 15,
    paddingHorizontal: 5,
    // backgroundColor : 'red',
  },
  titleText: {
    textAlign: 'center',
    marginTop: 11,
  },
})
