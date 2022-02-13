import React from 'react'
import { View, FlatList } from 'react-native'
import styles from './styles'
import useComponent from './hooks'
import { Props } from './models'
import { Text, SimpleHeader } from '../../components/index'
import { log, MainColors, strings } from '../../common/index'

const AthletePlan = (props: Props) => {

  const { navigation } = props

  const {
    containerView,
    bodyView,
    historyText
  } = styles

  const {
    renderPlan,
    plans
  } = useComponent(navigation)

  return (
    <View style={containerView}>
      <SimpleHeader navigation={navigation} title={strings.boughtPlan} />
      <View style={bodyView}>
        <Text
          style={[historyText,  { fontWeight : 'bold'}]}
          color={MainColors.commentBorder}
          type='bold'
          size='small'>
          {strings.historyBuy}{' : '}
        </Text>
        <FlatList
          renderItem={renderPlan}
          data={plans}
        />
      </View>

    </View>
  )
}

export default AthletePlan
