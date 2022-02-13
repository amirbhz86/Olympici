import { StyleSheet } from 'react-native'
import { BasicColors , MainColors } from '../../common/index'
import { ms } from '../../helper/index'

export default StyleSheet.create({

  containerView : {
    flex : 1 ,
    backgroundColor : BasicColors.white ,
  },
  bodyView : {
    width : ms(330,0.5) ,
    alignSelf : 'center' ,
  },
  historyText: {
    textAlign : 'left' ,
    marginTop : 29 , 
    marginBottom : 9 ,
  },
  rightView : {
    alignItems : 'flex-end' ,
  },
  planView : {
    marginBottom : 12 ,
    width : ms(330,0.5) ,
    height : 63 , 
    borderRadius : 7 ,
    justifyContent : 'space-between' ,
    backgroundColor : MainColors.plan ,
    flexDirection : 'row-reverse' ,
    paddingHorizontal  : ms(17,0.5) ,
    alignItems : 'center' ,

  }
  
})
