import { NextItemSVG, PervItemSVG, TickIconSVG } from '../../../assets/icons/index'
import { BasicColors, log, MainColors, strings } from '../../../common/index'
import { Pressable, Text } from '../../../components/index'
import { englishToPersianNum } from '../../../helper/englishToPersianNum'
import useAPI from '../../../hooks/useAPI'
import useRedux from '../../../hooks/useRedux'
import React, { useState } from 'react'
import { View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import styles from '../styles'

export const useComponent = (props: any) => {
  const {
    isDone,
    planId,
    exerciseNumber,
    focusedItem,
    items,
    prevScreen,
  } = props

  const {
    nextOrPerviousContainer,
    prevItemSvg,
    nextItemSvg,
    nextFadingView,
    prevFadingView,
    doneView,
    toDoView,
    tickSvg,
    prevPress,
    nextPress,
    donePress,
    toDoPress,
  } = styles

  const { Get, Save } = useRedux()
  const { changeExerciseAPI } = useAPI()
  const { exerciseObject, savedExercise, allExerciseObject }: any = Get().user
  const { athleteField } = Get().app
  const [showFile, setShowFile] = useState(false)
  const [filePath, setFilePath] = useState(false)
  const [is_Done, setIs_Done] = useState(false)

  const setExerciseItems = (value) => {
    if (prevScreen == 'athleteAllExercise') {
      Save(
        { allExerciseObject: { ...allExerciseObject, items: value } },
        'user',
      )
    } else {
      Save({ exerciseObject: { ...exerciseObject, items: value } }, 'user')
    }
  }

  const setExerciseFocused = (value) => {
    if (prevScreen == 'athleteAllExercise') {
      Save(
        {
          allExerciseObject: {
            ...allExerciseObject,
            focusedItem: value,
          },
        },
        'user',
      )
    } else {
      Save(
        { exerciseObject: { ...exerciseObject, focusedItem: value } },
        'user',
      )
    }
  }  

  const NextOrPerviousExrecise = () => {
    let nextScreenorNot: boolean = focusedItem + 1 < exerciseNumber
    let prevScreenorNot: boolean = focusedItem - 1 >= 0

    const nextExercise = () => {
      nextScreenorNot && setExerciseFocused(focusedItem + 1)
    }
    const prevExercise = () => {
      prevScreenorNot && setExerciseFocused(focusedItem - 1)
    }
    return (
      <View style={nextOrPerviousContainer}>
        <Pressable wrapperStyle={prevPress} onPress={prevExercise}>
          <PervItemSVG width={18} height={18} style={prevItemSvg} />
        </Pressable>
        <Text>
          {englishToPersianNum((focusedItem + 1).toString() , false )}
          {'/'}
          {englishToPersianNum(exerciseNumber.toString() , false )}
        </Text>
        <Pressable wrapperStyle={nextPress} onPress={nextExercise}>
          <NextItemSVG width={18} height={18} style={nextItemSvg} />
        </Pressable>
        {!prevScreenorNot && (
          <View
            style={[{ backgroundColor: MainColors.fading }, prevFadingView]}
          />
        )}
        {!nextScreenorNot && (
          <View
            style={[{ backgroundColor: MainColors.fading }, nextFadingView]}
          />
        )}
      </View>
    )
  }

  const closeonPress = () => {
    setShowFile(false)
    Save({ hideTabbar: true }, 'app')
  }

  const doneExercise = async () => {
    console.log('prevScreen',prevScreen);
    
      let editVar =
        prevScreen == 'athleteAllExercise'
          ? allExerciseObject.items
          : exerciseObject.items

      editVar[focusedItem].is_done = true
      console.log(editVar,'editVar');
      // show message ro dorost kon
      setExerciseItems(editVar)
      showMessage({
        message: strings.successfullyChangeStatus,
        type: 'success',
        duration: 2500,
      })
  }

  const todoExercise = async () => {
    console.log('prevScreen',prevScreen);
      let editVar =
         prevScreen == 'athleteAllExercise'
          ? allExerciseObject.items
          : exerciseObject.items
      editVar[focusedItem].is_done = false
      console.log(editVar,'editVar');
      // Save({ exerciseObject : editVar },'user')
      setExerciseItems(editVar)
      showMessage({
        message: strings.successfullyChangeStatus,
        type: 'success',
        duration: 2500,
      })
  }

  const ChangeStatusExercise = () => {
    if (is_Done) {
      return (
        <Pressable wrapperStyle={donePress} onPress={todoExercise}>
          <View style={doneView}>
            <TickIconSVG style={tickSvg} />
            <Text type={'bold'} size={'xSmall'} color={BasicColors.white}>
              {strings.finished}
            </Text>
          </View>
        </Pressable>
      )
    } else {
      return (
        <Pressable wrapperStyle={toDoPress} onPress={doneExercise}>
          <View style={toDoView}>
            <Text type={'bold'} size={'xSmall'} color={BasicColors.white}>
              {strings.doing}
            </Text>
          </View>
        </Pressable>
      )
    }
  }

  return {
    NextOrPerviousExrecise,
    ChangeStatusExercise,
    savedExercise,
    setShowFile,
    showFile,
    setFilePath,
    filePath,
    closeonPress,
    is_Done,
    setIs_Done,
  }
}

export default useComponent
