import { RowItem, ServicesTopMenuItems } from '../../components/index'
import React, { memo } from 'react'
import { View } from 'react-native'
import styles from './styles'
import { log } from '../../common/index'

const ServicesTopMenu = (props) => {
  const { topMenu, lineView, topMenuHeaderPress } = styles
  const {
    status,
    oppositeStatus,
    choosingSportStatus,
    sportSelected,
    flatListData,
    navigation,
    iconPath,
    userType
  } = props

  return (
    <View style={topMenu}>
     {true
        &&
        <>
          <RowItem
            where="topMenuHeader"
            fieldIcon={iconPath}
            onPress={oppositeStatus}
            fieldName={sportSelected}
            style={{ borderRadius: 13 }}
          />
          <View style={lineView} />
        </>
      }
        <ServicesTopMenuItems
        navigation={navigation}
        flatListData={flatListData}
      />
    </View>
  )
}

export default memo(ServicesTopMenu)
