import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import useComponent from './hooks'
import { Props } from './models'
import { Text , SimpleHeader } from '../../components/index'
import { log , strings } from '../../common/index'
import useRedux from '../../hooks/useRedux'

const PlanDetail = (props : Props ) => {

  const { route  , navigation } = props

  let data = route.params
  const { Get } = useRedux()
  const { userType } = Get().user
  const { created_at , remaining_time , title , description , ref , period , price , statusPayment  } = data

  const { containerView , detailcontainer } = styles

  const { RowItem } = useComponent()

  return (
    <View style={containerView}>
      <SimpleHeader navigation={navigation} title={strings.planDetail}/>
      <View style={detailcontainer}>
      { true && <RowItem rightTitle={'Title'} leftTitle={title}/>}
        <RowItem rightTitle={strings.description} leftTitle={description}/>
        <RowItem rightTitle={strings.created_at} leftTitle={created_at}/>
        { userType=='Trainer' && <RowItem rightTitle={strings.statusPayment} leftTitle={statusPayment}/>}
        { userType=='Trainer' && <RowItem rightTitle={strings.price} leftTitle={`${price} ${strings.toman}`}/> }
        { true && <RowItem rightTitle={strings.remaining_time} leftTitle={`${20} ${strings.aday}`}/> }
        { true && <RowItem rightTitle={strings.period} leftTitle={`${40} ${strings.aday}`}/>}
        { true  &&<RowItem rightTitle={'Tracking code'} leftTitle={`${ref}`}/> }
      </View>

    </View>
  )
}

export default PlanDetail
