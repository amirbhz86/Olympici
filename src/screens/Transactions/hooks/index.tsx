import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Text, Pressable } from '../../../components/index'
import { log, MainColors, strings } from '../../../common/index'
import { useAPI } from '../../../hooks/index'
import styles from '../styles'
import { englishToPersianNum } from '../../../helper/index'
import { getFormatedDate } from 'react-native-modern-datepicker'
// let todaySplited = getFormatedDate(new Date(), 'jYYYY/jMM/jDD').split('/')

export const useComponent = (navigation) => {
  const { getMyPlanAPI, getMyTransactionsAPI } = useAPI()
  const [plans, setPlans] = useState([{
    cart_obj: {
      created_at: '2020/04/09',
      title: 'golden premium',
      description: 'lorem ipsum',
    },
    ref_num: '2734676598',
  }, {
    cart_obj: {
      created_at: '2019/08/12',
      title: 'silver premium',
      description: 'lorem ipsum',
    },
    ref_num: '3334576402',
  }])
  const { planView, rightView } = styles

  const getTransactions = async () => {
    const transactionResult = await getMyTransactionsAPI()
    log('transactionResult', transactionResult);
    setPlans(transactionResult)
  }

  useEffect(() => {
    // getTransactions()
  }, [])

  const renderPlan = ({ item }) => {
    return (
      <Pressable onPress={() => planonPress(item)} wrapperStyle={planView}>
        <Text type={'bold'} color={MainColors.planText}>
          {item.cart_obj.created_at}
        </Text>
        <View style={rightView}>
          <Text type={'bold'} color={MainColors.planText}>
            {item.cart_obj.title}
          </Text>
        </View>
      </Pressable>
    )
  }

  const planonPress = (item) => {
    navigation.navigate('PlanDetail',
      {
        created_at: item.cart_obj.created_at,
        title: item.cart_obj.title,
        description: item.cart_obj.description,
        ref: item.ref_num
      })
  }
  return {
    plans,
    renderPlan
  }
}

export default useComponent