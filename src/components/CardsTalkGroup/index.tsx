import React, {memo} from 'react'
import {FlatList} from 'react-native'
import useComponent from './hooks'
import styles from './styles'
import {Props} from './models'


const CardsTalkGroup = (props: Props) => {
    const {data, navigation} = props
    const {renderTalksCard} = useComponent({navigation})
    const {talkCardsFlatList, contentFlatList} = styles

    return (
        <>
            <FlatList
                horizontal
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={contentFlatList}
                style={talkCardsFlatList}
                data={data}
                renderItem={renderTalksCard}
            />
        </>
    )
}

export default memo(CardsTalkGroup)
