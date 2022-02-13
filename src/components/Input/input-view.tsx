import { log } from '../../common/tools'
import { Text, TextInput } from '../../components/index'
import { ms } from '../../helper/index'
import React, { forwardRef, memo, useState } from 'react'
import { View } from 'react-native'
// import useComponent from './hooks'
import { Props } from './models'
import styles from './styles'
import { moderateScale } from 'react-native-size-matters'
import { StyleSheet } from 'react-native'

const VerticalOrHorizontalInputLogin = forwardRef((props: Props, ref) => {

  const {
    title,
    width = '100%',
    style,
    Icon,
    onPress ,
    textInputStyle,
    height,
    placeholder,
    multiline = false,
    state = 'vertical',
    textStyle,
    onChangeValue,
    numberOfLines = 1 ,
    onChangeText ,
    value ,
  } = props

  const {
    inputLoginContainer ,
    firstRow ,
    titleHorizView ,
    horizInputLoginView ,
  } = styles

  const {
    iconText
  } = styles1({ Icon })

  if (state === 'vertical') {
    return (
      <View
        style={[inputLoginContainer, { width , ...style }]}>
        {title && (
          <View style={[firstRow]}>
            {Icon
              && <Icon width={15} height={15} style={{ marginLeft : ms(17), marginRight  : ms(10) }} />
            }
            <Text size={'small'} type={'bold'} style={[iconText, textStyle]}>
              {title}
            </Text>
          </View>
        )}
        <TextInput
          blurOnSubmit={!multiline ? true : undefined}
          returnKeyType={!multiline ? "done" : undefined}
          multiline={true}
          numberOfLines={!multiline ? 1 : 5}
          onChangeText={onChangeText}
          onPress={onPress}
          value={value}
          textInputStyle={textInputStyle}
          height={height}
          ref={ref}
          {...props}
        />
      </View>
    )
  } else {
    return (
      <View
        // pointerEvents="none"
        style={[horizInputLoginView, { ...style }]}>
        <TextInput
          multiline={true}
          numberOfLines={!multiline ? 1 : 5}
          blurOnSubmit={true}
          returnKeyType={"done"}
          onChangeText={onChangeText}
          onPress={onPress}
          value={value}
          textInputStyle={{...textInputStyle }}
          height={height}
          ref={ref}
          {...props}
        />
        {title && (
          <View style={[titleHorizView]}>
            <Text style={textStyle} size={'xSmall'} type={'bold'}>
              {title}
            </Text>
            {Icon && <Icon style={{ marginRight: ms(17) }} />}
          </View>
        )}
      </View>
    )
  }
})

export default memo(VerticalOrHorizontalInputLogin)

const styles1 = (props: any) => {
  const { Icon } = props

  return StyleSheet.create({
    iconText: {
      marginRight: Icon ? moderateScale(7) : 10,
    },
    
  })
}