import { useRedux } from '../../../../hooks/index'
import { ComponentInput } from '../models'

const useComponent = (componentInput: ComponentInput) => {
  const { navigation, magicAnimation } = componentInput
  const { Get } = useRedux()
  const { user } = Get()

  const onLeftButtonPressed = (hasBack?: boolean, drawerRef?: any) => {
    if (hasBack) {
      navigation.goBack()
    } else {
      drawerRef && drawerRef.current.openDrawer()
    }
  }
  const centerTitleOpacity =
    magicAnimation &&
    magicAnimation.scrollValue.interpolate({
      inputRange: [
        magicAnimation.scrollRange.min,
        magicAnimation.scrollRange.max,
      ],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    })
  const wrapperViewShadow =
    magicAnimation &&
    magicAnimation.scrollValue.interpolate({
      inputRange: [
        magicAnimation.scrollRange.min,
        magicAnimation.scrollRange.max,
      ],
      outputRange: [0, 7],
      extrapolate: 'clamp',
    })
  const wrapperViewHeight =
    magicAnimation &&
    magicAnimation.scrollValue.interpolate({
      inputRange: [
        magicAnimation.scrollRange.min,
        magicAnimation.scrollRange.max,
      ],
      outputRange: [75, 55],
      extrapolate: 'clamp',
    })

  return {
    user,
    wrapperViewShadow,
    centerTitleOpacity,
    wrapperViewHeight,
    onLeftButtonPressed,
  }
}

export default useComponent
