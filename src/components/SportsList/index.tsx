import React, { memo } from 'react'
import { FlatList } from 'react-native'
import useComponent from './hooks'
import { Props } from './models'

const SportsList = (props: Props) => {
  const { onPress, data, userType } = props
  const { renderSportItem, renderEmptyList } = useComponent({ onPress, data, userType })

  return (
    <FlatList
      data={data}
      style={{  paddingBottom : 10 ,  borderRadius : 20 }}
      ListEmptyComponent={renderEmptyList}
      renderItem={renderSportItem} />
  )
}

export default memo(SportsList)
