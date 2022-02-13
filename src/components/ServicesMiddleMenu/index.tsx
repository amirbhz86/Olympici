import { ServicesMiddleMenuItems } from '../../components/index'
import React,{ memo } from 'react'

const ServicesMiddleMenu = (props) => {
  const { data, navigation, flatListData } = props
  return (
    <ServicesMiddleMenuItems
      {...props}
      navigation={navigation}
      flatListData={flatListData}
      data={data}
    />
  )
}

export default ServicesMiddleMenu
