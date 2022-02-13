import { BasicColors, MainColors, windowW } from '../../common/index'
import { ms } from '../../helper/index'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: BasicColors.white,
  },
  mainBodyView: {
    flex: 1,

    borderTopLeftRadius: 40,
    backgroundColor: BasicColors.white,
  },
  bodyView: {
    flex: 1,
    backgroundColor: MainColors.primary,
  },
  completedExerciseText: {
    textAlign: 'left',
    marginLeft: (windowW - ms(320, 0.5)) / 2,
    marginTop: 23,
  },
  exercisesText: {
    textAlign: 'left',
    marginTop: 22,
    marginLeft : (windowW - ms(320, 0.5)) / 2,
  },
  modalStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
