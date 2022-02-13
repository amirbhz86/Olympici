import { StyleSheet } from 'react-native'
import { BasicColors , MainColors } from '../../common/index'
import { ms } from '../../helper/index'

export default StyleSheet.create({

  containerView : {
    flex : 1 ,
    backgroundColor : BasicColors.white ,
  },
  detailcontainer : {
    marginTop : 6.5 ,
    width : ms(320,0.5),
    alignSelf : 'center' ,
  },
  rowItemView : {
    width : '100%' ,
    height : 60 ,
    flexDirection : 'row-reverse' ,
    justifyContent : 'space-between' ,
    alignItems : 'center' ,
  },
  lineView : {
    width : '100%' ,
    height : 0.6 ,
    backgroundColor : MainColors.planDetailLine ,
  }
  
})
