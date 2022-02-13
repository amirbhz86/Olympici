import { Animated } from 'react-native'

export interface Props {
  navigation: any
  isMainHeader?: boolean
  hideLogo?: boolean
  hasBack?: boolean
  drawerRef?: any
  profileThumbnailUrl?: string
  onThumbnailPressed?: () => void
  magicAnimation?: MagicAnimation
  centerTitle?: string
  title?: string
  titleStyle?: any
}

export interface ComponentInput {
  navigation?: any
  magicAnimation?: MagicAnimation
}

export interface MagicAnimation {
  scrollRange: {
    min: number
    max: number
  }
  scrollValue: Animated.Value
}
