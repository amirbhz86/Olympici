import { BasicColors, MainColors } from '../../common/index'
import { Pressable, Text } from '../../components/index'
import { ms } from '../../helper/sizing'
import React, { FC, memo } from 'react'
import { View } from 'react-native'
import useComponent from './hooks/useComponent'
import { Props } from './models'
import styles from './styles'

const CheckBox: FC<Props> = memo((props) => {
  const {
    title,
    onChangeValue,
    checked = false,
    width,
    navigation,
    rtl = true,
    style,
    type = 'square',
  } = props
  const { wrapperView, iconWrapperView, titleWrapperView } = styles
  const { checkIconPress, renderCheckIcon, onTermsPress } = useComponent({
    checked,
    navigation,
  })

  return (
    <View
      style={[
        style,
        wrapperView,
        { width: width, flexDirection: rtl ? 'row-reverse' : 'row' },
      ]}>
      {title && (
        <View style={[titleWrapperView, { marginStart: 10 }]}>
          <Text size="xSmall" color={MainColors.text}>
            {title}
          </Text>
        </View>
      )}
      <Pressable
        wrapperStyle={[
          iconWrapperView,
          {
            borderRadius: type == 'circle' ? ms(8.5, 0.5) : 0,
            backgroundColor: checked
              ? MainColors.primaryLighter
              : BasicColors.white,
          },
        ]}
        borderless
        onPress={() => checkIconPress(onChangeValue)}>
        {renderCheckIcon()}
      </Pressable>
    </View>
  )
});
export default memo(CheckBox);
