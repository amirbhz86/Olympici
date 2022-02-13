import { strings } from '../../common/index'
import { CommonHeader, PrymaryHeader } from '../../components/index'
import React from 'react'
import { ScrollView, View } from 'react-native'
import useComponent from './hooks'
import { Props } from './models'
import styles from './styles'

const MyProgress = (props: Props) => {
  const { navigation } = props
  const {
    containerView,
    commonHeader,
    prymaryTitleText,
    progressView,
    attentionBoySvg,
  } = styles
  const {
    OffersPart,
    MovementRow,
    TechnicalRow,
    PhysicalRow,
    ExerciseRow,
  } = useComponent(navigation)

  return (
    <View style={containerView}>
      <PrymaryHeader titleStyle={prymaryTitleText} title={strings.myProgress}>
        <CommonHeader
          navigation={navigation}
          style={commonHeader}
          headerType="myExercise"
        />
      </PrymaryHeader>
      <ScrollView>
        <View style={progressView}>
          <MovementRow />
          <TechnicalRow />
          <PhysicalRow />
          <ExerciseRow />
        </View>
        <OffersPart />
      </ScrollView>
    </View>
  )
}

export default MyProgress
