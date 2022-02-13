import { BasicColors, MainColors, windowH } from '../../common/index'
import { ms, scale } from '../../helper/sizing'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: BasicColors.white,
  },
  noRecordText : {
    alignSelf : 'center' ,
    marginTop :( windowH - 470 - ms(51,0.5))/2
  },
  detailText: {
    lineHeight: 19,
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 8.5,
    textAlign: 'right',
  },
  lineView: {
    width: ms(300, 0.5),
    height: 0.6,
    backgroundColor: MainColors.linePrimary,
    alignSelf: 'center',
    marginBottom: 9.5,
  },
  confirmWrapperPress: {
    width: 35,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputPress: {
    width: '68%',
    height: 35,
    borderWidth: 1,
    borderColor: MainColors.textInputBorder,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTextInput: {
    textAlign: 'center',
    width: '100%',
    borderWidth: 0,
  },
  calendarMainView: {
    width: '100%',
    height: 284,
  },
  footerHeader: {
    marginTop: -25,
    width: '100%',
    height: 59,
    backgroundColor: BasicColors.white,
    paddingLeft: 26,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
  },
  dayText: {
    textAlign: 'right',
    marginRight: scale(22),
  },
  calendarHeaderView: {
    justifyContent: 'center',
    width: '100%',
    height: 77,
    backgroundColor: MainColors.calendarHeader,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  calendarView: {
    width: ms(330, 0.5),
    backgroundColor: 'white',
    borderRadius: 10,
  },
  addRecordRowView: {
    width: ms(280, 0.5),
    height: 36,
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  styleDateInputLogin: {
    marginTop: 30,
  },
  dateTextInputLogin: {
    marginLeft: scale(55),
    marginRight: -scale(15),
  },
  timeTextInputLogin: {
    marginLeft: scale(63),
  },
  recordTextInputLogin: {
    marginLeft: scale(42),
  },
  recordTextInputInputLogin: {
    borderRadius: 7,
    borderColor: MainColors.textInputBorder,
  },
  dateTextInputInputLogin: {
    borderRadius: 7,
    borderColor: MainColors.textInputBorder,
  },
  timeTextInputInputLogin: {
    borderRadius: 7,
    borderColor: MainColors.textInputBorder,
  },
  styleTimeInputLogin: {
    marginTop: 14,
  },
  styleRecordInputLogin: {
    marginTop: 14,
  },
  savePress: {
    marginLeft: scale(3),
    marginBottom: 11 ,
    paddingVertical : 10 , 
    paddingHorizontal : 7 ,
  },
  addNewRecordView: {
    width: ms(330, 0.5),
    backgroundColor: BasicColors.white,
    shadowColor: MainColors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 13,
    alignSelf: 'center',
    elevation: 5,
    marginTop: -55,
  },
  dateRowView: {
    marginTop: 14,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  inputsView: {
    width: '87%',
    alignSelf: 'center',
    marginTop: 16,
    alignItems: 'flex-start',
  },
  modalStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exercisePress: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 11,
  },
  introInputLogin: {
    alignSelf: 'center',
    width: '100%',
  },
  textInputIntroInputLogin: {
    borderRadius: 10,
    borderColor: MainColors.textInputBorder,
  },
  dateText: {
    marginRight: 5,
    textAlign: 'left',
  },
  squarePlusPress: {
    paddingVertical : 2 , 
    paddingHorizontal : 10 ,
    marginLeft : -10 ,
    marginTop : -7 ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordsView: {
    marginTop: 25,
  },
  recordItem: {
    marginBottom: 13,
  },
  championPress: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 11,
  },
  headerOfRecordsView: {
    width: ms(295),
    height: 42,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 19,
  },
})
