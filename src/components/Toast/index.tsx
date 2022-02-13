import { Text } from '../../components/index'
import React, { FC, memo } from 'react'
import { TouchableOpacity } from 'react-native'
import { hideMessage } from 'react-native-flash-message'
import useComponent from './hooks/useComponent'
import { Props } from './models'
import styles from './styles'

const Toast: FC<Props> = memo((componentInput) => {
  const { renderThemeColors } = useComponent()
  const { message } = componentInput
  const { toastWrapperView, messageText } = styles

  return (
    <TouchableOpacity
      onPress={hideMessage}
      style={[
        toastWrapperView,
        { backgroundColor: renderThemeColors(message.type).background },
      ]}>
      <Text
        size={'small'}
        color={renderThemeColors(message.type).text}
        style={messageText}
        type={'light'}>
        {message.message}
      </Text>
    </TouchableOpacity>
  )
})

export default Toast
