import { BasicColors, MainColors } from '../../common/index'
import { ms } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wraperView: {
    borderRadius: 12,
    borderWidth: 1,
    width: ms(105),
    marginLeft: ms(6),
    marginRight: ms(6),
    marginTop: 6,
    marginBottom: 6,
    backgroundColor: BasicColors.white,
    elevation: 5,
    shadowColor: MainColors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    alignItems: 'center',
  },
  pressCardTalk: {
    height: 140,
    width: ms(105),
    alignItems: 'center',
    // paddingBottom : 7,
  },
  titleText: {
    marginTop: 3,
    maxWidth: '100%',
  },
  nameText: {
    marginTop: 12.4,
    maxWidth: '100%',
  },
  imageView: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginTop: 11,
    elevation: 5,
    shadowColor: MainColors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    zIndex: -200,
  },
  talkImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  playNowView: {
    width: 23,
    height: 23,
    borderRadius: 11.5,
    backgroundColor: BasicColors.white,

    elevation: 5,
    shadowColor: MainColors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    position: 'absolute',
    top: 70,
    left: 41,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 600,
  },
})
