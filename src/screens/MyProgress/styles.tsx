import { BasicColors, MainColors, windowW } from '../../common/index'
import { ms } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: BasicColors.white,
  },
  commonHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -5,
  },
  prymaryTitleText: {
    position: 'absolute',
    top: 81,
    right: 27,
  },
  leftRowProgressView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressPercentText: {
    marginLeft: ms(8.6, 0.5),
  },
  offersText: {
    textAlign: 'left',
  },
  offerDetailText: {
    marginTop: 2,
    textAlign: 'left',
  },
  offersView: {
    marginBottom: 30,
    width: ms(320, 0.5),
    backgroundColor: MainColors.offer,
    alignSelf: 'center',
    marginTop: 26,
    paddingHorizontal: 15,
    paddingTop: 13,
    paddingBottom: 25,
    borderRadius: 10,
  },
  progressRowView: {
    width: ms(276, 0.5),
    height: 47.72,
    alignSelf: 'center',
    marginVertical: 9.6,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressView: {
    width: ms(320, 0.5),
    borderRadius: 10,
    paddingVertical: 7,
    backgroundColor: BasicColors.white,
    marginTop: 25,
    alignSelf: 'center',
    shadowColor: MainColors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  attentionBoySvg: {
    width: 78.6,
    height: 104.36,
    marginTop: -51.1,
    marginLeft: (windowW - ms(320, 0.5)) / 2,
    marginBottom: 7.2,
    zIndex: 200,
    // zIndex : 100 ,
    // shadowColor: MainColors.shadow,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
})
