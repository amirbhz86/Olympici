import { StyleSheet } from 'react-native'
import {windowH ,windowW , MainColors} from '../../common/index'
import {ms} from '../../helper/index'

export default StyleSheet.create({
  preRegisterView: {
    flexDirection: 'row-reverse',
    marginTop: 10,
    alignSelf: 'center',
  },
  enterPress:{
    marginLeft : 5, 
    // backgroundColor : 'red' ,
 },
 containerBottomButtonText :{
  // position : 'absolute' ,
  // bottom : 50,
  // left : (windowW - ms (310))/2,
 },
 wrraperButton: {
  alignSelf: 'center',
  height: 39,
  borderRadius: 25,
  backgroundColor: MainColors.primaryLight
},
})
