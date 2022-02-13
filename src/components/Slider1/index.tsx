import {scale} from '../../helper/index'
import React, {memo} from 'react'
import {View} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import useComponent from './hooks'
import styles from './styles'
import {Props} from './models'

const imageArray =[
  require('../../assets/images/sport3.jpeg'),
  require('../../assets/images/sport4.jpeg'),
  require('../../assets/images/sport5.jpeg'),
  require('../../assets/images/sport6.jpeg')
]

const Slider = memo((props: Props) => {
    const {data} = props
    const {sliderView} = styles
    const {renderSlider} = useComponent()

    return (
        <View style={sliderView}>
            <Carousel
                data={imageArray}
                renderItem={renderSlider}
                sliderWidth={scale(340)}
                itemWidth={scale(340)}
            />
        </View>
    )
})

export default Slider
