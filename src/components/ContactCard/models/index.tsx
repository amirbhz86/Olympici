import { StyleProp, ViewStyle } from 'react-native'

export type CardType = 'email' | 'message' | 'phoneCall' | 'map'

export interface Props {
  style?: StyleProp<ViewStyle>
  type: 'email' | 'phoneCall' | 'message'
  value?: string
  navigation?: any
}
export interface ComponentInput {
  navigation: any
}
