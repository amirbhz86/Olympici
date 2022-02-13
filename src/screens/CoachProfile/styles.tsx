import { BasicColors, MainColors } from '../../common/index'
import { scale } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    flex: 1,
    // backgroundColor : MainColors.primary ,
    backgroundColor: BasicColors.white,
  },
  firstRowInfoView: {
    marginTop: 21,
    width: '100%',
    flexDirection: 'row',
    backgroundColor : 'red' ,
    justifyContent: 'space-around',
  },
  lineView: {
    width: scale(325),
    height: 0.6,
    backgroundColor: MainColors.primary,
    alignSelf: 'center',
    marginTop: 22.5,
  },
  aboutCoachText: {
    marginHorizontal: scale(26),
    marginTop: 17.5,
    textAlign: 'right',
  },
  medalImage: {
    alignSelf: 'center',
    marginTop: 14.7,
  },
  socialRowView: {
    flex : 1 ,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems : 'center',
  },
  lineTopCoachView: {
    width: scale(280),
    height: 0.3,
    alignSelf: 'center',
    backgroundColor: BasicColors.white,
    marginTop: 21,
  },
  secondRowInfoView: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  nameText: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  coachProfileImage: {
    width: 109,
    height: 109,
    borderRadius: 54.5,
    marginTop: 6,
    alignSelf: 'center',
    borderColor: BasicColors.white,
    borderWidth: 1,
  },
  commonHeader: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: MainColors.primary,
  },
  bottomCoachView: {
    width: '100%',
    
    backgroundColor: BasicColors.white,
    borderTopRightRadius: 60,
    marginTop: -70,
    minHeight: 363,
  },
  higherTopCoachView: {
    height: 308,
    backgroundColor: BasicColors.white,
    width: '100%',
  },
  lowerTopCoachView: {
    height: 308,
    backgroundColor: MainColors.primary,
    width: '100%',
    borderBottomLeftRadius: 60,
  },
  helpView: {
    width: '100%',
    height: 70,
    backgroundColor: MainColors.primary,
  },
})
