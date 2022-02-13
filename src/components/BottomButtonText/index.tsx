import React from 'react'
import { View } from 'react-native'
import styles from './styles'
import { PressableRadius, Text, Button } from '../../components/index'
import { MainColors, strings } from '../../common/index'
import { Props } from './models'
import { ms } from '../../helper/index'

const BottomButtonText = (props: Props) => {
  const { pressString, normString, buttonString, style, buttonOnPress, textOnPress } = props
  const { preRegisterView, enterPress, wrraperButton, containerBottomButtonText } = styles
  return (
    <>
      <View style={[style]} >
        <Button wrapperStyle={wrraperButton} onPress={() => buttonOnPress()} screenName='firstScreens' width={ms(310)} title={buttonString} />
        <View style={preRegisterView}>
          <PressableRadius onPress={() => textOnPress()} wrapperStyle={enterPress}>
            <Text color={MainColors.accent} size={'xSmall'}>
              {pressString}
            </Text>
          </PressableRadius>
          <Text size={'xSmall'}>
            {normString}
          </Text>
        </View>
      </View>
    </>
  )
}

export default BottomButtonText
