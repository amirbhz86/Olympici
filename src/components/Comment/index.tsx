import {Rating, Text} from '../../components/index'
import React, {memo} from 'react'
import {Image, View} from 'react-native'
import {Props} from './models'
import styles from './styles'


const Comment = (props: Props) => {
    const {
        commentView,
        firstRow,
        profileImage,
        text,
        commentText,
        profileImageView,
        nameRowView,
    } = styles
    const {style, id, name = '', cover = '', comment = '', rating = 0, brief_desc = ''} = props

    return (
        <View key={id} style={[commentView, style]}>
            <View style={firstRow}>
                <View style={profileImageView}>
                    <Image style={profileImage} source={cover}/>
                </View>
                <View>
                    <View style={nameRowView}>
                        <Rating numberOfStars={rating}/>
                        <Text type={'bold'} style={text}>
                            {name}
                        </Text>
                    </View>
                    <Text type={'bold'} style={text}>
                        {brief_desc}
                    </Text>
                </View>
            </View>
            <Text style={commentText}>{comment}</Text>
        </View>
    )
}

export default memo(Comment)
