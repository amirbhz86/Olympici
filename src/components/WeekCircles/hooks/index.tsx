import { BasicColors, MainColors, log, otherExercise, completedExercise, exerciseObject } from '../../../common/index'
import { Pressable, Text, PressableRadius } from '../../../components/index'
import useRedux from '../../../hooks/useRedux'
import React from 'react'
import styles from '../styles'

const useComponent = () => {
  const { circleView, innerCircleView } = styles
  const { Save, Get } = useRedux()
  const { selectedDayOfWeek } = Get().app

  const renderDayCircles = ({ item, index }) => {
    return (
      <PressableRadius
        onPress={() => {
          if (index == 0 || index == 3) {
            Save({ exerciseObject: [] }, 'user')
            Save({ completedExercise: [] }, 'user')
            Save({ otherExercise: [] }, 'user')
          } else {
            Save({ otherExercise: otherExercise }, 'user')
            Save({ completedExercise: completedExercise }, 'user')
            Save({ exerciseObject: exerciseObject }, 'user')
          }
          Save({ selectedDayOfWeek: Math.abs(6 - index) }, 'app')
        }}
        innerStyle={innerCircleView}
        wrapperStyle={[
          circleView,
          {
            backgroundColor:
              Math.abs(6 - index) == selectedDayOfWeek
                ? BasicColors.white
                : MainColors.commentBorder,
          },
        ]}>
        <Text
          color={Math.abs(6 - index) == selectedDayOfWeek ? 'black' : 'white'}
          size="xxSmall"
        >
          {item}
        </Text>
      </PressableRadius>
    )
  }

  return {
    renderDayCircles,
  }
}

export default useComponent
