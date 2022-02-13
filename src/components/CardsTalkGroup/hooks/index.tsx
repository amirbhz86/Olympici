import {MainColors} from '../../../common/index'
import {TalkCard} from '../../../components/index'
import React, {useState} from 'react'
import {ComponentInput} from '../models'
// import {Data} from "components/CardsTalkGroup/models";


const useComponent = (componentInput: ComponentInput) => {
    const {navigation} = componentInput
    const [pressedItem, setPressedItem] = useState<number | undefined>(undefined)


    const renderTalksCard = ({item, index}: { item: any, index: number }) => {
        const {cover, name, brief_desc, id, video} = item
        return (
            <>
                <TalkCard
                    key={id}
                    cover={cover}
                    name={name}
                    onPress={() => video && navigation.navigate('VideoPlayer', {url: video, title: name})}
                    onPressOut={() => {
                        setPressedItem(undefined)
                    }}
                    onPressIn={() => {
                        setPressedItem(index)
                    }}
                    desc={brief_desc}
                    style={{
                        borderColor:
                            pressedItem == index ? MainColors.accentDarker : 'white',
                    }}
                />
            </>
        )
    }

    return {
        renderTalksCard,
    }
}
export default useComponent
