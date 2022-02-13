import { URL } from '../../api/useApiCore'
import { log, strings } from '../../common/index'
import {
  CommonHeader,
  Exercise,
  Pressable,
  VideoPlayer,
} from '../../components/index'
import useRedux from '../../hooks/useRedux'
import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import useComponent from './hooks'
import { Props } from './models'
import styles from './styles'
let isSaved: 1 | -1
let savedId: any

const ExerciseDetailScreen = (props: Props) => {
  const { navigation } = props

  let prevScreen: 'markedExercises' | 'athleteAllExercise' =
    props.route.params.prevScreen

  const { Get } = useRedux()
  const { exerciseObject, allExerciseObject }: any = Get().user

  let exerciseData: any =
    prevScreen == 'athleteAllExercise'
      ? allExerciseObject.items[allExerciseObject.focusedItem]
      : exerciseObject.items[exerciseObject.focusedItem]
  let exerciseNumber: any =
    prevScreen == 'athleteAllExercise'
      ? allExerciseObject.items.length
      : exerciseObject.items.length
  let focusedItem: any =
    prevScreen == 'athleteAllExercise'
      ? allExerciseObject.focusedItem
      : exerciseObject.focusedItem
  let items: any =
    prevScreen == 'athleteAllExercise'
      ? allExerciseObject.items
      : exerciseObject.items

  const renderIsDone = () => {
    switch (prevScreen) {
      case 'markedExercises':
        return undefined
      case 'athleteAllExercise':
        return exerciseData.is_done
      default:
        return exerciseData.is_done
    }
  }

  // let is_done = (prevScreen !== 'markedExercises' && exerciseData) ? exerciseData.is_done : undefined
  let planId = exerciseData ? exerciseData.id : undefined

  const {
    containerView,
    commonHeader,
    containerVideo,
    closeImage,
    closePress,
  } = styles

  const {
    NextOrPerviousExrecise,
    ChangeStatusExercise,
    setShowFile,
    showFile,
    setFilePath,
    filePath,
    closeonPress,
    savedExercise,
    setIs_Done,
    is_Done,
  } = useComponent({
    // is_done,
    planId,
    exerciseNumber,
    focusedItem,
    items,
    prevScreen,
  })

  useEffect(() => {
    prevScreen !== 'markedExercises' && exerciseData
      ? setIs_Done(exerciseData.is_done)
      : setIs_Done(undefined)
  }, [allExerciseObject, exerciseObject])


  if (exerciseData) {
    isSaved = -1
    savedId = undefined
    for (let perSaved of savedExercise) {
      if ('exercise_obj' in perSaved) {
        if (perSaved.exercise_obj.id == exerciseData.exercise_obj.id) {
          isSaved = 1
          savedId = perSaved.id
        }
      }
    }
  }

  if (exerciseData) {
    return (
      <View style={containerView}>
        <CommonHeader
          navigation={navigation}
          headerType="myExercise"
          headerTitle={'Exercise'}
          style={commonHeader}
        />
        <Exercise
          setFilePath={setFilePath}
          description={exerciseData.exercise_obj.description}
          title={exerciseData.exercise_obj.title}
          time={exerciseData.exercise_obj.time}
          files={exerciseData.exercise_obj.files}
          setShowFile={setShowFile}
          userType={'athlete'}
          isSaved={isSaved}
          savedId={savedId}
          exerciseData={exerciseData}
          exerciseId={exerciseData.exercise_obj.id}
        />

        <NextOrPerviousExrecise />

        {prevScreen !== 'markedExercises' && <ChangeStatusExercise />}

        {showFile && (
          <View style={[containerVideo]}>
            <Pressable onPress={closeonPress} wrapperStyle={closePress}>
              <Image
                source={require('../../assets/icons/closeIcon.png')}
                style={closeImage}
              />
            </Pressable>
            {filePath.type == 'VIDEO' ? (
              <VideoPlayer filePath={filePath.efile} />
            ) : (
              <Image
                source={filePath.efile}
                style={{ width: '100%', height: 400 }}
              />
            )}
          </View>
        )}
      </View>
    )
  } else {
    return null
  }
}

export default ExerciseDetailScreen
