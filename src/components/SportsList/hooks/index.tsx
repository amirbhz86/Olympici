import { RowItem , Text } from '../../../components/index'
import React from 'react'
import { strings } from '../../../common/index'
import { View } from 'react-native'
import styles from '../styles'

const useComponent = (props) => {
  const { radiusRowItem, separatorLine , noFieldText } = styles
  const { onPress, data, userType } = props

  const renderEmptyList=()=>{
    return(
      <Text style={noFieldText}>
        {`${strings.noField}\n${strings.fillFieldInfo}\n${strings.selectField}`}
      </Text>
    )
  }

  const renderSportItem = ({ item, index }) => {
    return (
      <>
        {index !== 0 && <View style={separatorLine} />}
        <RowItem
          userType={userType}
          id={item.field_obj.id}
          where="sportList"
          // trainerPhone={userType == 'athlete' ? item.trainer_obj.username : ''}
          fieldIcon={item.field_obj.images[0].image}
          type={item}
          athleteField={item.id}
          innerStyle={{
            borderRadius: index == data.length - 1 ? 13 : 0,
          }}
          fieldName={item.field_obj.title}
          onPress={onPress}
          style={{ borderRadius: item === 'select' ? 13 : 0 }}
        />
      </>
    )
  }
  return {
    renderSportItem,
    renderEmptyList ,
  }
}

export default useComponent
