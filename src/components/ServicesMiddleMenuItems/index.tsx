import React from 'react'
import { FlatList } from 'react-native'
import useComponent from './hooks'
import styles from './styles'

const ServicesMiddleMenuItems = (props) => {
  const { contentMiddleFlatList, middleMenuFlatList, middleItemView } = styles
  const { data, flatListData, navigation } = props

  const { renderMiddleMenu } = useComponent({ navigation, data })
  return (
    <FlatList
      horizontal
      keyExtractor={(item) => item.title}
      contentContainerStyle={contentMiddleFlatList}
      style={middleMenuFlatList}
      data={flatListData}
      renderItem={renderMiddleMenu}
    />
  )
}

export default ServicesMiddleMenuItems
