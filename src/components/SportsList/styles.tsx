import { MainColors } from '../../common/index'
import { scale } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  radiusRowItem: {
    borderRadius: 13,
  },
  separatorLine: {
    height: 0.5,
    width: scale(290),
    alignSelf: 'center',
    backgroundColor: MainColors.linePrimaryRgb,
  },
  noFieldText : {
    textAlign : 'center' ,
    marginVertical : 19 ,
    alignSelf : 'center' ,
  }
})
