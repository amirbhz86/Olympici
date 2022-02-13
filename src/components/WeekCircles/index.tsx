import { daysOfWeek } from '../../common/index'
import React,{ memo } from 'react'
import { FlatList, View } from 'react-native'
import useComponent from './hooks'
import styles from './styles'

const WeekCircles = () => {
  const { renderDayCircles } = useComponent()
  const { flatListContainer } = styles
  return (
    <View style={flatListContainer}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={daysOfWeek}
        renderItem={renderDayCircles}
      />
    </View>
  )
}

export default memo(WeekCircles)
