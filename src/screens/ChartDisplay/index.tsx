import { BasicColors, strings } from '../../common/index'
import { CommonHeader, PrymaryHeader, Text } from '../../components/index'
import React from 'react'
import { View } from 'react-native'
import useComponent from './hooks'
import { Props } from './models'
import styles from './styles'
import { englishToPersianNum } from '../../helper/index'

const ChartDisplay = (props: Props) => {
  
  const { navigation } = props

  const {
    containerView,
    commonHeader,
    titlePrymaryHeader,
    todayText
  } = styles

  const {
    CustomDropdown,
    CustomLineChart,
    startJalali,
    endJalali,
  } = useComponent(props)



  return (
    <View style={containerView}>
        <PrymaryHeader
        titleStyle={titlePrymaryHeader}
        title={strings.chartDisplay}>
              <CommonHeader
          navigation={navigation}
          style={commonHeader}
          headerType="chartDisplay"
        />
        <Text type="medium" color={BasicColors.white} style={todayText}>
          {englishToPersianNum(startJalali)}{'    '}
          {englishToPersianNum(endJalali)}
        </Text>
           <CustomDropdown />
        </PrymaryHeader>
      <CustomLineChart /> 
    </View>
  )
}

export default ChartDisplay
