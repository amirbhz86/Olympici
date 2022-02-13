import { Props, ScreenName } from '../models'
import styles from '../styles'

const useComponent = () => {
  const { registerButton, firstScreensButton } = styles

  const renderButtonStyle = (screenName: ScreenName) => {
    switch (screenName) {
      case 'PersonalInfo': {
        return {
          buttonStyle: registerButton,
        }
      }
      case 'exercises': {
        return {
          buttonStyle: registerButton,
        }
      }
      case 'firstScreens': {
        return {
          buttonStyle: firstScreensButton,
        }
      }
      default:
        return {}
    }
  }
  const renderButtonVerticalPadding = (sizeMode: Props['sizeMode']) => {
    switch (sizeMode) {
      case 'large':
        return 11
      case 'medium':
        return 7
      case 'small':
        return 6
      case 'xSmall':
        return 4
    }
  }
  return {
    renderButtonVerticalPadding,
    renderButtonStyle,
  }
}

export default useComponent
