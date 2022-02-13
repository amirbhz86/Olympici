import { BasicColors, MainColors } from '../../common/index'
import { ms, scale } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  commentView: {
    marginTop: 5,
    marginBottom: 11,
    width: scale(343),
    backgroundColor: BasicColors.white,
    alignSelf: 'center',
    borderRadius: 7,
    paddingBottom: 19,
    shadowColor: MainColors.primaryLight,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  nameRowView: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  profileImageView: {
    width: ms(65),
    height: ms(65),
    borderRadius: ms(32.5),
    shadowColor: MainColors.shadowProfile,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  profileImage: {
    width: ms(65),
    height: ms(65),
    borderRadius: ms(32.5),
  },
  commentText: {
    marginTop: 12,
    marginRight: ms(14),
    marginLeft: ms(20),
    textAlign: 'left',
    lineHeight: 18,
  },
  firstComment: {
    marginTop: 23,
  },
  firstRow: {
    justifyContent: 'space-between',
    height: ms(65),
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
    paddingRight: 14,
    paddingLeft: 17,
    flexDirection: 'row-reverse',
  },
  text: {
    textAlign: 'right',
  },
})
