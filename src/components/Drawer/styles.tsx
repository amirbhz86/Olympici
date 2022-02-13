import { BasicColors, MainColors, windowH } from '../../common/index'
import { ms, vs } from '../../helper/sizing'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: BasicColors.white,
  },
  selectFromCamera: {
    width: '100%',
    height: 150,
    backgroundColor: MainColors.primaryLight,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  topView: {
    height: '37.1%',
    width: '100%',
  },
  selectFromGallery: {
    width: '100%',
    height: 150,
    backgroundColor: MainColors.accent,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  selectImageView: {
    width: ms(250, 0.5),
    borderRadius: 15,
    backgroundColor: 'white',
    height: 300,
  },
  innerSelectFromCamera: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerSelectFromGallery: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row-reverse',
    // backgroundColor : 'red' ,
    alignSelf : 'flex-start' ,
    alignItems: 'center',
    // alignSelf: 'flex-end',
    marginRight: ms(32.5, 0.5),
  },
  profileImage: {
    height: ms(91, 0.5),
    width: ms(91, 0.5),
    borderRadius: ms(45.5, 0.5),
  },
  profilePress: {
    right: 0,
    position: 'absolute',
    bottom: vs(8.7),
  },
  containerDrawer: {
    height: '100%',
    justifyContent: 'space-between',
    width: 330,
    backgroundColor: MainColors.drawerBackground,
    marginRight: 0,
  },
  iconView: {
    marginRight: ms(6.7, 0.5),
  },
  leftView: {
    width: ms(205, 0.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: ms(25, 0.5),
  },
  profileView: {
    flex: 25 / 37.1,
    paddingRight: ms(29, 0.5),
    paddingLeft: ms(32, 0.5),
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    backgroundColor: MainColors.primary,
  },
  headerview: {
    flex: 20 / 37.1,
    width: '100%',
    paddingVertical: 20,
    backgroundColor: BasicColors.white,
    justifyContent: 'center',
  },
  middleview: {
    flex: 1,
    width: '100%',
    paddingVertical: 20,
    backgroundColor: BasicColors.white,
    marginVertical: 20,

    justifyContent: 'center',
  },
  bottomView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: '100%',
    height: 70,
    bottom: 0,
    paddingVertical: 20,
    backgroundColor: BasicColors.white,
  },
})
