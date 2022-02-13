import React, { useEffect , FC } from 'react'
// import { View } from 'react-native'
import { View } from 'react-native'
import Video from 'react-native-video'
import { CommonActions } from '@react-navigation/native'
import useContainer from './hooks/useContainer'
import { Props } from './models'
import styles from './styles'

const Splash: FC<Props> = (props: Props) => {
  const { navigation } = props
  const { backgroundVideo, containerView } = styles
  // const { userType, onEndVideo } = useContainer({ navigation })
  useEffect(() => {

    let timer = setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: 'Initial' }],
          }),
        )
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={{ flex: 1 , backgroundColor : 'red' }}>
      <Video
        source={require('../../assets/video/splashVideo.mp4')}
        onEnd={() => { }}
        fullscreen={true}
        style={backgroundVideo}
        resizeMode="cover"
      />
    </View>
  )
}

export default Splash
