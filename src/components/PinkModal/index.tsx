import { CloseModalSVG } from '../../assets/icons/index'
import { BasicColors } from '../../common/colors'
import { Pressable, Text } from '../../components/index'
import { ms } from '../../helper/sizing'
import React, { memo } from 'react'
import { View } from 'react-native'
import { Props } from './models'
import styles from './styles'

const PinkModal = (props: Props) => {
  const {
    containerView,
    modalHeaderView,
    closeSvg,
    bodyView,
    closePress,
  } = styles
  const { modalTitle, children, iconTitle, closeOnPress } = props

  return (
    <View style={containerView}>
      <View style={modalHeaderView}>
        {modalTitle && (
          <Text type="bold" size="small" color={BasicColors.white}>
            {modalTitle}
          </Text>
        )}
        {iconTitle}
        <Pressable onPress={closeOnPress} wrapperStyle={closePress}>
          <CloseModalSVG
            width={ms(15, 0.5)}
            height={ms(15, 0.5)}
            style={closeSvg}
          />
        </Pressable>
      </View>
      <View style={bodyView}>{children}</View>
    </View>
  )
}

export default memo(PinkModal)
