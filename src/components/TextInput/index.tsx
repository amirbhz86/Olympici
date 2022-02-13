import React, { forwardRef, memo } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { Props } from './models'
import { log } from '../../common/index'
import styles from './styles'

const CustomTextInput = forwardRef((props: Props, ref: any) => {
  const {
    multiline,
    height,
    placeholder,
    textInputStyle,
    onPress,
    onChangeText,
    numberOfLines
  } = props

  const { textInput } = styles
  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress} >
        <View pointerEvents="none">
          <TextInput
            {...props}
            ref={ref}
            style={[
              textInput,
              {
                height: 39 ,
                paddingVertical: numberOfLines !== 1 ? 10 : 0,
              },
              textInputStyle,
            ]}
            placeholder={placeholder}
          />
        </View>
      </TouchableOpacity>
    )
  } else {
    return (

      // <View pointerEvents="none">
        <TextInput
          {...props}
          width={'100%'}
          ref={ref}
          style={[
            textInput,
            {
               height: height ,
               paddingVertical: numberOfLines !== 1 ? 10 : 5
            },
            textInputStyle,
          ]}
          placeholder={placeholder}
        />
      // </View>
    )
  }
})

export default memo(CustomTextInput)
