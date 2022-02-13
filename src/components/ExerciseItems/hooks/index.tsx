import { ExerciseItem } from '../../../components/index'
import useAPI from '../../../hooks/useAPI'
import useRedux from '../../../hooks/useRedux'
import React from 'react'
let type: any
export const useComponent = (props) => {
  const {
    where,
    setSelectedExercise,
    setSelectedForRemove,
    setRemovingModal,
    navigation,
  } = props

  const { Get } = useRedux()
  const { getfavoritesAPI } = useAPI()
  const { username, savedExercise } = Get().user

  const renderTypeOfExercise = (where, item) => {
    switch (where) {
      case 'selectExercises': {
        return 'checkbox'
      }
      case 'coachExercises': {
        return 'program'
      }
      case 'athleteExercises': {
        return 'program'
      }
      case 'exerciseOfDay': {
        type = 'normal'
        for (let perExercise of savedExercise) {
          if (perExercise.id == item.exercise_obj.id) {
            type = 'saved'
          }
        }
        type = item.is_done ? 'completed' : type

        return type
      }
      case 'markedExercises': {
        return 'markedExercises'
      }
      default:
        return 'normal'
    }
  }

  const renderExercises = ({ item, index }: { item: any; index: number }) => {
    if (
      'trainer_obj' in item &&
      where == 'coachExercises' &&
      item.trainer_obj.username !== username
    ) {
      return <></>
    }

    if (
      where == 'exerciseOfDay' ||
      where == 'markedExercises' ||
      where == 'athleteExercises'
    ) {
      return (
        <ExerciseItem
          bottomTitle={item.exercise_obj.time}
          type={renderTypeOfExercise(where, item)}
          data={item}
          setRemovingModal={setRemovingModal}
          setSelectedForRemove={setSelectedForRemove}
          setSelectedExercise={setSelectedExercise}
          title={item.exercise_obj.title}
          navigation={navigation}
          index={index}
        />
      )
    }

    return (
      <ExerciseItem
        bottomTitle={item.time}
        type={renderTypeOfExercise(where, item)}
        data={item}
        setRemovingModal={setRemovingModal}
        setSelectedForRemove={setSelectedForRemove}
        setSelectedExercise={setSelectedExercise}
        title={item.title}
        navigation={navigation}
        index={index}
      />
    )
  }
  return {
    renderExercises,
  }
}
export default useComponent
