import {
  AngleBracketLeftSVG,
  BookmarkSVG,
  CompletedSVG,
  TrashSVG,
  LittleArrowRightSVG ,
  LittleLeftGreenSVG
} from '../../../assets/icons/index'
import { log, strings , MainColors  } from '../../../common/index'
import { CheckBox, Pressable } from '../../../components/index'
import { ms } from '../../../helper/index'
import useAPI from '../../../hooks/useAPI'
import useRedux from '../../../hooks/useRedux'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import style from '../styles'
let selectedCheckbox = []

export const useComponent = (props) => {
  const { navigation, index, item } = props
  const {
    completedView,
    finishedCircle,
    normalItemView,
    circleNormalView,
    bookmarkSvg,
    absoluteView,
    markedExercisesView,
    trashSvg,
    programItemView,
  } = style
  const {
    type,
    setSelectedExercise,
    data,
    setSelectedForRemove,
    setRemovingModal,
  } = props
  const [checkboxStatus, setCheckboxStatus] = useState(false)
  const { removeExerciseAPI } = useAPI()
  const { Save, Get } = useRedux()
  const { exerciseObject, allExerciseObject } = Get().user
  const { selectedExercises } = Get().app

  useEffect(() => {
    // let status = false
    // for (let perSelected of selectedExercises.items) {
    //   if (perSelected.id == data.id) {
    //     status = true
    //   }
    // }
    // status ? setCheckboxStatus(true) : setCheckboxStatus(false)
  }, [selectedExercises])

  const renderDetailItem = () => {
    switch (type) {
      case 'completed': {
        return {
          Bookmark: () => <View style={absoluteView} />,
          itemStyle: completedView,
          leftTitle: strings.finished,
          LeftIcon: () => {
            return (
              <View style={finishedCircle}>
                <CompletedSVG width={ms(12, 0.5)} height={ms(8.39, 0.5)} />
              </View>
            )
          },
        }
      }
      case 'normal': {
        return {
          Bookmark: () => <View style={absoluteView} />,
          itemStyle: normalItemView,
          leftTitle: null,
          LeftIcon: () => {
            return (
              <View style={circleNormalView}>
                {/* <AngleBracketLeftSVG
                  width={ms(4.5, 0.5)}
                  height={ms(8.35, 0.5)}
                /> */}
                <LittleLeftGreenSVG color='#ffffff' width={17} height={17}  />
              </View>
            )
          },
        }
      }
      case 'saved': {
        return {
          Bookmark: () => (
            <BookmarkSVG
              width={ms(10.86, 0.5)}
              height={ms(15.3, 0.5)}
              style={bookmarkSvg}
            />
          ),
          itemStyle: normalItemView,
          leftTitle: null,
          LeftIcon: () => {
            return (
              <View style={circleNormalView}>
                <AngleBracketLeftSVG
                  width={ms(4.5, 0.5)}
                  height={ms(8.35, 0.5)}
                />
              </View>
            )
          },
        }
      }
      case 'markedExercises': {
        return {
          Bookmark: () => (
            <BookmarkSVG
              width={ms(10.86, 0.5)}
              height={ms(15.3, 0.5)}
              style={bookmarkSvg}
            />
          ),
          itemStyle: markedExercisesView,
          leftTitle: null,
          LeftIcon: () => {
            return (
              <View style={circleNormalView}>
                <AngleBracketLeftSVG
                  width={ms(4.5, 0.5)}
                  height={ms(8.35, 0.5)}
                />
              </View>
            )
          },
        }
      }
      case 'checkbox': {
        return {
          Bookmark: () => <View style={absoluteView} />,
          itemStyle: normalItemView,
          leftTitle: null,
          LeftIcon: () => {
            return (
              <CheckBox
                type="circle"
                title={undefined}
                onChangeValue={(value: boolean) => {
                  if (value) {
                    selectedCheckbox = selectedExercises.items
                    selectedCheckbox = [...selectedCheckbox, { ...data }]
                    Save(
                      {
                        selectedExercises: {
                          ...selectedExercises,
                          items: selectedCheckbox,
                        },
                      },
                      'app',
                    )
                  } else {
                    selectedCheckbox = selectedExercises.items
                    const afterRemove = selectedCheckbox.filter((item) => {
                      return item.id !== data.id
                    })
                    selectedCheckbox = afterRemove
                    Save(
                      {
                        selectedExercises: {
                          ...selectedExercises,
                          items: selectedCheckbox,
                        },
                      },
                      'app',
                    )
                  }
                }}
                checked={checkboxStatus}
              />
            )
          },
        }
      }
      case 'program': {
        return {
          Bookmark: () => {
            return (
              <Pressable wrapperStyle={trashSvg} onPress={removeExercise}>
                <TrashSVG />
              </Pressable>
            )
          },
          itemStyle: programItemView,
          leftTitle: null,
          LeftIcon: () => <View style={absoluteView} />,
        }
      }
      case 'athleteAllExercise': {
        return {
          Bookmark: () => <View />,
          //   return (
          //     <Pressable wrapperStyle={trashSvg} onPress={removeExercise}>
          //       <TrashSVG />
          //     </Pressable>
          //   )
          // },
          itemStyle: programItemView,
          leftTitle: null,
          LeftIcon: () => <View style={absoluteView} />,
        }
      }
    }
  }

  const removeExercise = async () => {
    setSelectedForRemove(data.id)
    setRemovingModal(true)
  }
  const itemOnPress = () => {
    if (type == 'normal' || type == 'completed' || type == 'saved') {
      navigation.navigate('ExerciseDetailScreen', {
        prevScreen: 'exerciseList',
      })
      setExerciseFocused(index)
    } else if (type == 'markedExercises') {
      navigation.navigate('ExerciseDetailScreen', {
        prevScreen: 'markedExercises',
      })
      setExerciseFocused(index)
    } else if (type == 'program') {
      navigation.navigate('ExerciseDetailScreen')
      setExerciseFocused(index)
    } else if (type == 'athleteAllExercise') {
      navigation.navigate('ExerciseDetailScreen', {
        prevScreen: 'athleteAllExercise',
      })
      Save(
        {
          allExerciseObject: {
            ...allExerciseObject,
            focusedItem: index,
          },
        },
        'user',
      )
    } else if (type == 'checkbox') {
      if (!checkboxStatus) {
        selectedCheckbox = selectedExercises.items
        selectedCheckbox = [...selectedCheckbox, { ...data }]
        Save(
          {
            selectedExercises: {
              ...selectedExercises,
              items: selectedCheckbox,
            },
          },
          'app',
        )
      } else if (checkboxStatus) {
        selectedCheckbox = selectedExercises.items
        const afterRemove = selectedCheckbox.filter((item) => {
          return item.id !== data.id
        })
        selectedCheckbox = afterRemove
        Save(
          {
            selectedExercises: {
              ...selectedExercises,
              items: selectedCheckbox,
            },
          },
          'app',
        )
      }
    }
  }

  const setExerciseFocused = (index) => {
    Save({ exerciseObject: { ...exerciseObject, focusedItem: index } }, 'user')
  }

  return {
    // checkboxStatus,
    itemOnPress,
    renderDetailItem,
  }
}

export default useComponent
