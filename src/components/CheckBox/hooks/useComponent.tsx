import { Icon } from 'native-base'
import React, { Dispatch, SetStateAction } from 'react'
import { ComponentInput } from '../models'
import styles from '../styles'

const useComponent = (props: ComponentInput) => {
  const { checked, navigation } = props
  const { checkIcon } = styles

  const checkIconPress = (
    onChangeValue: Dispatch<SetStateAction<boolean>> | undefined,
  ) => {
    if (onChangeValue) {
      onChangeValue(!checked)
    }
  }
  const renderCheckIcon = () => {
    return checked && <Icon name="check" type="FontAwesome" style={checkIcon} />
  }
  const onTermsPress = async () => {
    navigation.navigate('TermsAndConditions')
  }

  return { checkIconPress, renderCheckIcon, onTermsPress }
}

export default useComponent
