import { MainColors, windowH, windowW } from '../../common/index'
import { getTabBarHeight, ms, scale, SP } from '../../helper/index'
import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

export default StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: 'white',
  },
  remindRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '84%',
    marginTop: SP(10),
    alignSelf: 'center',
  },
  bottomSectionView: {
    zIndex: 5,
    width: windowW,
    borderRadius: 30,
    minHeight: windowH - scale(180) - getTabBarHeight(),
    backgroundColor: 'white',
  },
  arrowRightPress: {
    zIndex: 5,
    position: 'absolute',
    right: scale(22),
    top: '13.8%',
  },
  olympiOIcon: {},
  welcomeView: {
    marginTop: SP(49),
    alignSelf: 'center',
    width: '85%',
    alignItems: 'flex-end',
  },
  topLayerHeaderView: {
    marginTop: SP(-2),
    height: 180,
    width: windowW,
  },
  LoginHeaderView: {
    marginTop: SP(-32),
  },
  enterPhoneText: {
    marginTop: SP(7),
    alignSelf : 'flex-start'
  },
  welcomeText: {
    alignSelf : 'flex-start'
  },
  newAccountText: {
    alignSelf: 'center',
    marginTop: SP(42),
  },
  InstructionPhone: {
    textAlign: 'center',
    lineHeight: 30,
  },
  InstructionPhoneView: {
    width: moderateScale(300),
    height: 103,
    marginTop: SP(27),
    alignSelf: 'center',
    alignItems: 'center',
  },
  acceptRulesText: {
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(320),
    height: 34,
    alignSelf: 'center',
    marginTop: SP(19),
    flexDirection: 'row',
  },
  loginHeaderImage: {
    zIndex: 0,
  },
  olympiIcon: {
    height: ms(31.9),
    width: ms(25),
  },
  olympiLogos: {
    position: 'absolute',
    top: '34.44%',
    left: scale(135),
    flexDirection: 'row',
    zIndex: 5,
  },
  loginHeaderLayerImage: {
    width: windowW,
    height: windowW * 0.7973,
  },
  olympiTextImage: {
    marginTop: ms(6),
    marginLeft: ms(7),
    width: ms(75),
    height: ms(28),
  },
  inputLogin: {
    marginTop: 14,
  },
  inputLoginView: {
    alignSelf: 'center',
    width: scale(310),
    marginTop: 60,
  },
  loginHeaderLayerView: {
    marginTop: -32,
    position: 'absolute',
    zIndex: 4,
  },
  marginBottomButtonText: {
    flexWrap: 'wrap',
    width: ms(310),
    marginTop:
      198 + 78 + 34 + 23 + 20 >
      windowH - scale(180) - getTabBarHeight() - 66 - 70
        ? 40
        : 0,
    position:
      198 + 78 + 34 + 23 + 20 >
      windowH - scale(180) - getTabBarHeight() - 66 - 70
        ? 'relative'
        : 'absolute',
    bottom:
      198 + 78 + 34 + 23 + 20 >
      windowH - scale(180) - getTabBarHeight() - 66 - 70
        ? 0
        : 50,
    marginBottom:
      198 + 78 + 34 + 23 + 20 >
      windowH - scale(180) - getTabBarHeight() - 66 - 70
        ? 40
        : 0,
    left: (windowW - ms(310)) / 2,
  },
  //198+78+34+23+20
  wrraperButton: {
    alignSelf: 'center',
    height: 39,
    marginTop: windowH * 0.2,
    borderRadius: 25,
    backgroundColor: MainColors.primaryLight,
  },
})
