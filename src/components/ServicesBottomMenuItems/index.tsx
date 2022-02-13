import React,{ memo } from 'react'
import { FlatList } from 'react-native'
import { useComponent } from './hooks'
import styles from './styles'

const ServicesBottomMenuItems = (props) => {
  const { navigation , flatlistData } = props
  const { renderItems } = useComponent(navigation)
  const { contentBottomFlatList, bottomMenuFlatList } = styles

  return (
    <FlatList
      horizontal
      style={bottomMenuFlatList}
      contentContainerStyle={contentBottomFlatList}
      data={flatlistData}
      renderItem={renderItems}
    />
  )
}

export default memo(ServicesBottomMenuItems)
