import {TriangleWatchPinkSVG} from '../../assets/images'
import {BasicColors, MainColors} from '../../common/index'
import {PressableRadius, Text} from '../../components/index'
import React, {memo} from 'react'
import {Image, View} from 'react-native'
import {Props} from './models'
import styles from './styles'

const TalkCard = (props: Props) => {
    const {style, name = '', cover = '', desc = '', onPressOut, onPressIn, onPress} = props
    const {
        wraperView,
        talkImage,
        playNowView,
        imageView,
        nameText,
        titleText,
        pressCardTalk,
    } = styles
    return (
        <PressableRadius
            wrapperStyle={[wraperView, style]}
            style={pressCardTalk}
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            rippleBackgroundColor={MainColors.accentDarker}>
            <View style={imageView}>
                <Image
                    source={cover}
                    style={talkImage}
                />
            </View>
            <Text
                size={'xxSmall'}
                type={'medium'}
                color={BasicColors.black}
                numberOfLines={1}
                style={nameText}>
                {name}
            </Text>
            <Text
                size={'xxSmall'}
                type={'medium'}
                color={BasicColors.black}
                numberOfLines={1}
                style={titleText}>
                {desc}
            </Text>
            <View style={playNowView}>
                <TriangleWatchPinkSVG color={'blue'} width={8} height={8.88}/>
            </View>
        </PressableRadius>
    )
}

export default memo(TalkCard)
