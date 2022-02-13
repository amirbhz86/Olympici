import {
  ImageProps,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native'
import { Icon, Message, Position } from 'react-native-flash-message'

export interface Props {
  position?: Position
  floating?: boolean
  message: {
    type?: 'danger' | 'success' | 'default'
    message?: Message
  }
  hideStatusBar?: boolean
  icon: Icon
  style: StyleProp<ViewStyle>
  textStyle: StyleProp<TextStyle>
  titleStyle: StyleProp<TextStyle>

  renderFlashMessageIcon?(
    icon: Icon,
    style: StyleProp<ImageStyle>,
    customProps: Partial<ImageProps>,
  ): React.ReactElement<{}> | null
}
