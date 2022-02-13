import { log, windowH } from '../../common/index'
import { ms } from '../../helper/index'
import React, { memo } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
import useComponent from './hooks'
import { Props } from './models'

const ExerciseItems = (props: Props) => {
  const { renderExercises } = useComponent(props)
  const { exerciseData, style, onEndReached, loading, finished , height , renderEmptyList } = props

  const renderFlatlistFooter = () => {
    return !finished && loading ? <ActivityIndicator /> : null
  }

  return (
    // windowH - ms(51, 0.5) - 415 
    <View style={[{ height }]}>
       <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached && onEndReached}
        ListFooterComponent={renderFlatlistFooter}
        ListEmptyComponent={renderEmptyList}
        style={style}
        data={exerciseData}
        renderItem={renderExercises}
      />
    </View>
  )
}

export default memo(ExerciseItems)
