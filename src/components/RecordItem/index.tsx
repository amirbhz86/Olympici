import { MainColors } from '../../common/index'
import { strings } from '../../common/languages'
import { Text } from '../../components/index'
import { englishToPersianNum } from '../../helper/englishToPersianNum'
import React,{ memo } from 'react'
import { View } from 'react-native'
import { getFormatedDate } from 'react-native-modern-datepicker'
import { Props } from './models'
import styles from './styles'

const RecordItem = (props: Props) => {
  const {
    containerView,
    firstRowView,
    rightFirstRowView,
    textView,
    textText,
    rightPartView,
    todayRecordText,
    leftPartView,
    introText,
    recordText,
  } = styles
  const { date, detail, recordValue, style } = props

  return (
    <View style={[containerView, style]}>
      <View style={firstRowView}>
        <View style={leftPartView}>
          <Text style={{ marginRight : 8 }} color={MainColors.primaryLight} type="medium" size="medium">
            {strings.numberRecord}
            {' :'}
          </Text>
          <Text size="small" color={MainColors.primaryLight}>
            {(recordValue.toString())}
            {'   '}
          </Text>
        </View>
        <View style={rightFirstRowView}>
          <View style={rightPartView}>
            <Text
              type="medium"
              size="medium"
              style={todayRecordText}
              color={MainColors.primaryLight}>
              {strings.todayRecord} : 
            </Text>
            <Text size="xSmall" color={MainColors.primaryLight}>
              {date}
            </Text>
          </View>
        </View>
      </View>
      <View style={textView}>
        <Text style={recordText}>
          <Text type="bold" size="small" style={introText}>
            {strings.introductionWithSpace}
            {':  '}
          </Text>
          <Text style={textText} size="small">
            {detail ? detail : '-' }
          </Text>
        </Text>
      </View>
    </View>
  )
}

export default memo(RecordItem)
