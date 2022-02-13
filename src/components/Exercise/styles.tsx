import { BasicColors, MainColors } from '../../common/index'
import { ms } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    width: ms(330, 0.5),
    alignSelf: 'center',
    backgroundColor: BasicColors.white,
    marginTop: 23,
  },
  bodyPartView: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: ms(4, 0.5),
    paddingTop: 14.5,
    paddingBottom: 7.5,
  },
  exclamationSvg: {
    marginLeft: 5,
  },
  introContainerText: {
    flexWrap: 'wrap',
    width: ms(330, 0.5),
    lineHeight: 22,
  },
  introView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: ms(322, 0.5),
    marginTop: 5,
  },
  emptyFileText: {
    marginTop: 5,
    textAlign: 'left',
  },
  exerciseFileText: {
    marginTop: 14,
  },
  durationSvg: {
    marginHorizontal: 5,

  },
  durationView: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  addToProgramView: {
    width: ms(320, 0.5),
    height: ms(226, 0.5),
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: MainColors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  exerciseTitleText: {
    textAlign: 'right',
  },
  leftFileView: {
    // alignItems: 'flex-end',
  },
  playFilePress: {
    marginRight: ms(14, 0.5),
  },
  fileView: {
    flexDirection: 'row-reverse',
    // backgroundColor : 'red' ,
    alignItems: 'center',
    marginTop: 17,
    justifyContent: 'flex-end',
  },
  headerRowView: {
    width: '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  firstLineView : {
    marginTop : -8 ,
    width: ms(330, 0.5),
    height: 1,
    alignSelf: 'center',
    backgroundColor: MainColors.grayLine,
  },
  lineView: {
    width: ms(330, 0.5),
    height: 1,
    alignSelf: 'center',
    marginTop: 4.5,
    backgroundColor: MainColors.grayLine,
  },
  addToProgram: {
    fontSize: 8,
    marginRight: ms(1.6, 0.5),
  },
  leftHeaderView: {
    flexDirection: 'row',
  },
  addPress: {
    flexDirection: 'row',
    width: ms(110, 0.5),
    height: ms(20, 0.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: MainColors.icon,
  },
  markView: {
    width: ms(30, 0.5),
    height: ms(30, 0.5),
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MainColors.icon,
  },
  markPress : {
    marginTop : -20 ,
    marginBottom : 5 ,
    paddingHorizontal : 13 , 
    paddingVertical : 13 ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
  }
})
