import { ServicesBottomMenuItems } from '../../components/index'
import React, { memo } from 'react'

const ServicesBottomMenu = (props) => {
  const { navigation , flatlistData } = props
  return <ServicesBottomMenuItems flatlistData={flatlistData} navigation={navigation} />
}

export default memo(ServicesBottomMenu)
