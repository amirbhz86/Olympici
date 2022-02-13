import { BasicColors, MainColors } from '../../common/index'
import { ms, scale } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  rowPress: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: BasicColors.white,
    width: scale(320),
    height: 114,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: MainColors.border,
    shadowColor: MainColors.shadow25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentPress: {
    width: scale(320),
    borderRadius: 10,
    height: 114,
    alignItems: 'center',
    // backgroundColor : 'red' ,
    justifyContent: 'space-around',
    flexDirection: 'row-reverse',
    paddingRight: ms(20),
    paddingLeft: ms(20),
  },
  leftText : {
    position : 'absolute' ,
    right : 20 ,
  },
  sectionRowView: {
    width : ms(80) ,
    // backgroundColor : 'blue' ,
    position : 'absolute' ,
    left : ms(20) , 
    justifyContent: 'center',
    alignItems: 'center',
  },
  callUsView: {
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: MainColors.accentLight,
  },
})
