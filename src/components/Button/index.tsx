import { BasicColors } from '../../common/index'
import { PressableRadius, Text } from '../../components/index'
import React, { memo } from 'react'
import { ActivityIndicator , View } from 'react-native'
import useComponent from './hooks/index'
import { Props } from './models'
import styles from './styles'

const Button = memo((props: Props) => {
  const { renderButtonVerticalPadding } = useComponent()
  const {
    screenName,
    title = '',
    textSize,
    isLoading = false,
    width,
    onPress,
    sizeMode = 'medium',
    disabled = false,
    textType = 'medium',
    wrapperStyle = {},
    children,
    innerStyle,
  } = props
  const { wrapperView , rowView } = styles
  const { renderButtonStyle } = useComponent()
  const { buttonStyle } = renderButtonStyle(screenName)

  return (
    <PressableRadius
      disabled={disabled}
      style={[buttonStyle, innerStyle]}
      wrapperStyle={[wrapperView, wrapperStyle]}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator
          color={BasicColors.white}
          style={{ marginVertical: 5 }}
        />
      ) : (
        <View style={rowView}>
          {
          title!=='' &&
            <Text
              type={textType}
              style={{ textAlign: 'center' }}
              size={textSize || sizeMode}
              color={BasicColors.white}>
              {title}
            </Text>
            }
          {children}
        </View>
      )}
    </PressableRadius>
  )
})

export default Button
