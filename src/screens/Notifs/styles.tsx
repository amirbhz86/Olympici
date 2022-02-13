import { BasicColors, MainColors, windowH } from '../../common/index'
import { ms } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: BasicColors.white ,
  },
  notifsFlatList: {
    marginTop: 35,
  },
  activityIndicator: {
    marginTop: (windowH - 67 - ms(51, 0.5)) / 2,
  },
  noMessageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineView: {
    width: ms(300, 0.5),
    height: 0.6,
    backgroundColor: MainColors.commentBorder,
    alignSelf: 'center',
    marginVertical: 10,
  },
})
