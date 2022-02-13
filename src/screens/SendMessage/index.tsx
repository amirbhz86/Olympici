import { WhiteTelegramSVG } from '../../assets/icons/index'
import { strings , log } from '../../common/index'
import { Button, Input, SimpleHeader } from '../../components/index'
import { ms } from '../../helper/index'
import React,{ useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import useComponent from './hooks'
import { Props } from './models'
import styles from './styles'

const SendMessage = (props: Props) => {
  const { navigation } = props
  // const { profile, full_name, id } = route.params.athlete_obj

  const {
    containerView,
    titleTextInput,
    innerButton,
    wrapperButton,
    whiteTelegramSvg,
    wrapperScrollView,
  } = styles

  const {
    titleMessage,
    loading,
    contentMessage,
    setTitleMessage,
    setContentMessage,
    sendMessage,
  } = useComponent({ navigation })
  
  useEffect(() => {
    // log(titleMessage,'titleMessage')
  }, [])

  return (
    <View style={containerView}>
      <SimpleHeader
        title={'Send Message'}
        // data={route.params}
        // profilePath={profile}
        navigation={navigation}
      />
      <ScrollView style={wrapperScrollView}>
        <Input
          value={titleMessage}
          onChangeValue={(value: string) => setTitleMessage(value)}
          width={ms(330, 0.5)}
          height={37}
          title={strings.titleMessage}
          textInputStyle={titleTextInput}
        />
        <Input
          value={contentMessage}
          onChangeValue={(value: string) => setContentMessage(value)}
          width={ms(330, 0.5)}
          height={135}
          title={strings.messageContent}
          multiline
          textInputStyle={titleTextInput}
        />
      </ScrollView>
      <Button
        onPress={()=>{}}
        innerStyle={innerButton}
        title={strings.sendMessage}
        width={50}
        isLoading={loading}
        disabled={loading}
        wrapperStyle={wrapperButton}
        screenName="firstScreens">
        <WhiteTelegramSVG style={whiteTelegramSvg} />
      </Button>
    </View>
  )
}

export default SendMessage
