import { strings, windowH , log } from '../../common/index'
import {
  Calendar,
  ExerciseItems,
  MyExerciseHeader,
  RestDay,
  Text,
} from '../../components/index'
import { ms } from '../../helper/index'
import useRedux from '../../hooks/useRedux'
import React from 'react'
import { ActivityIndicator, ScrollView, View } from 'react-native'
import Modal from 'react-native-modal'
import useComponent from './hooks/index'
import styles from './styles'

const ExercisesList = (props) => {
  const { navigation } = props
  const { Get } = useRedux()
  const { exerciseObject , completedExercise , otherExercise } = Get().user
  const {
    hidePicker,
    calendarStatus,
    setCalendarStatus,
    setDateSelected,
    dateSelected,
    loading,
    // completedExercise,
    // otherExercise,
  } = useComponent(navigation)

  console.log(completedExercise , otherExercise , 'addadsa');
  

  const {
    containerView,
    mainBodyView,
    bodyView,
    completedExerciseText,
    exercisesText,
    modalStyle,
  } = styles

  const exerciseContent = loading ? (
    <ActivityIndicator
      style={{
        marginTop: (windowH - 231 - ms(51, 0.5)) / 2,
        alignSelf: 'center',
      }}
      size="large"
      color="black"
    />
  ) : ( otherExercise.length !==0 || completedExercise.length !==0 ) ? (
    <>
      <Text type="medium" style={completedExerciseText}>
        {strings.completedExercise}
        {` (${completedExercise.length.toString()})`}
      </Text>
      <ExerciseItems
        navigation={navigation}
        where={'exerciseOfDay'}
        exerciseData={completedExercise}
      />
      <Text type="medium" style={exercisesText}>
        {strings.exercises}
        {` (${otherExercise.length.toString()})`}
      </Text>
      <ExerciseItems
        navigation={navigation}
        where={'exerciseOfDay'}
        exerciseData={otherExercise}
      />
    </>
  ) : (
    <RestDay />
  )

  return (
    <View style={containerView}>
       <MyExerciseHeader
        dateSelected={dateSelected}
        setCalendarStatus={(value: any) => setCalendarStatus(value)}
        navigation={navigation}
      />

     <View style={bodyView}>
        <ScrollView style={mainBodyView}>
          {exerciseContent}
        </ScrollView>
      </View>
      <Modal
        style={modalStyle}
        useNativeDriver={true}
        onBackdropPress={hidePicker}
        onBackButtonPress={hidePicker}
        hideModalContentWhileAnimating={true}
        isVisible={calendarStatus ? true : false}>
        <Calendar
          mode={'calendar'}
          calendarStatus={true}
          oppositeCalendarStatus={hidePicker}
          setDateSelected={(value) => setDateSelected(value)}
        />
      </Modal>
    </View>
  )
}

export default ExercisesList
