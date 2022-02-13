import { MainColors } from '../../common/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  readMoreWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  content: {
    flexDirection: 'row-reverse' ,
    paddingVertical : 7 , 
    justifyContent : 'center'  ,
    alignItems : 'center' ,
    // paddingHorizontal : 7  ,
  },
  angleIcon: {
    marginRight: 7,
  },
  readMoreText: {
    color: MainColors.clickable,
  },
})
