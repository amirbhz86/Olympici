import React, { memo } from 'react'
import { FlatList } from 'react-native'
import useComponent from './hooks'
import { Props } from './models'

const ServicesTopMenuItems = memo((props: Props) => {
  const { flatListData, navigation } = props
  const { renderTopMenu } = useComponent({ navigation })
  return (
    <FlatList
      keyExtractor={(item) => item.title}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={flatListData}
      renderItem={renderTopMenu}
    />
  )
})

export default ServicesTopMenuItems
