import { MainColors } from '../../common/index'
import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

export default StyleSheet.create({
  textInput: {
    height: 39,
    width : '100%' ,
    borderRadius: moderateScale(26),
    paddingHorizontal: 17,
    borderColor: MainColors.primaryLighter,
    borderWidth: 1,
    // textAlignVertical: 'top',
    justifyContent : 'flex-end' ,
    alignItems : 'flex-end' ,
    textAlign: 'right',
    fontFamily: 'Vazir',
  },
})
