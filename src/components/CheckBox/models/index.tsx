import { StyleProp, ViewStyle } from 'react-native'

export interface ComponentInput {
  checked: boolean
  navigation?: any
}

export interface Props {
  type?: 'circle' | 'square'
  title?: string
  rtl?: boolean
  style?: StyleProp<ViewStyle>
  navigation?: any
  width?: number | string
  checked?: boolean
  onChangeValue?: any
}
