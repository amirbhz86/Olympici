import { FontSizeTypes, FontType } from 'components/Text/models'
import { StyleProp, ViewStyle } from 'react-native'

export interface Props {
  title?: string
  disabled?: boolean
  isLoading?: boolean
  sizeMode?: 'large' | 'medium' | 'small' | 'xSmall'
  theme?: 'dark' | 'light'
  textType?: FontType
  width?: number | string
  textSize?: FontSizeTypes
  wrapperStyle?: StyleProp<ViewStyle> | {}
  onPress?: () => void
  screenName?: 'PersonalInfo' | 'exercises' | 'firstScreens' | undefined
  children?: any
  innerStyle?: any
}

export type ScreenName = 'PersonalInfo' | 'exercises' | 'firstScreens'
