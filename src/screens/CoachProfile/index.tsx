import { BasicColors, MainColors, strings } from '../../common/index'
import { CommonHeader, ScrollViewTwoColorInseting } from '../../components/index'
import React from 'react'
import { View } from 'react-native'
import useComponent from './hooks'
import { Props } from './models'
import styles from './styles'

const CoachProfile = (props: Props) => {
  const { navigation } = props
  const { containerView, commonHeader, helpView } = styles
  const { TopCoachProfile, BottomCoachProfile } = useComponent(props)
  return (
    <View style={containerView}>
      <CommonHeader
        navigation={navigation}
        style={commonHeader}
        headerType="myExercise"
        headerTitle={strings.coachProperty}
      />
      <ScrollViewTwoColorInseting
        topColor={MainColors.primary}
        bottomColor={BasicColors.white}>
        <TopCoachProfile />
        <View style={helpView} />
        <BottomCoachProfile />
      </ScrollViewTwoColorInseting>
    </View>
  )
}

export default CoachProfile
