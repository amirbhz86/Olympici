import {URL} from '../../../api/useApiCore'
import {NewLeftArrowSVG} from '../../../assets/icons/index'
import {BasicColors} from '../../../common/index'
import {Pressable ,PressableRadius , Text} from '../../../components/index'
import {ms} from '../../../helper/index'
import React, {memo} from 'react'
import {Image, View} from 'react-native'
import {Props} from './models'
import styles from './styles'

const SimpleHeader = (props: Props) => {
    const {title, style, noRadius = false, navigation, onPress, profilePath = null, data} = props
    const {
        containerView,
        profileImage,
        rightView,
        profilePress,
        statusBarView,
        leftArrowPress
    } = styles

    return (
        <>
            <View style={statusBarView}/>
            <View
                style={[
                    containerView,
                    {
                        borderBottomEndRadius: noRadius ? 0 : 25,
                        borderBottomStartRadius: noRadius ? 0 : 25,
                        paddingRight: profilePath ? ms(19, 0.5) : ms(28, 0.5)
                    },
                ]}>
                <PressableRadius wrapperStyle={leftArrowPress} onPress={() => navigation.goBack()}>
                    {/* <NewLeftArrowSVG width={18} height={18}/> */}
                    <Image style={{ width : ms(18) , height : ms(15.5)}} source={require('../../../assets/icons/arrow-right.png')}/>
                </PressableRadius>
                <View style={rightView}>
                    <Text
                        type="medium"
                        color={BasicColors.white}
                        size="large"
                        style={{textAlign: 'center'}}>
                        {title}
                    </Text>
                    {profileImage && (
                        <Pressable
                            onPress={() => navigation.navigate('AthleteProfile', data)}
                            wrapperStyle={profilePress}>
                            {false ? (
                                <Image
                                    style={profileImage}
                                    source={{uri: `${URL}${profilePath}`}}
                                />
                            ) : (
                                <Image
                                    style={{ width : 40 , height : 40 }}
                                    source={require('../../../assets/images/profile.png')}
                                />
                            )}
                        </Pressable>
                    )}
                </View>
            </View>
        </>
    )
}

export default memo(SimpleHeader)
