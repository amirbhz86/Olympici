import React, { memo } from 'react'
import { View, StyleSheet , Image } from 'react-native'
import { getTabBarHeight, scale } from '../../helper/index'
import Carousel from 'react-native-snap-carousel'
import { ViewProps } from './models'

const Slider = (props: any ) => {
  const { container } = styles()
  // const { renderSlider } = props
  const { sliderView , galleryImage } = styles()

  const renderSlider = ({ item } : any ) => {
    return (
      // <View style={{ width : 300 , height : 50 ,
      //   // backgroundColor : 'red' ,
      //    backgroundColor: `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)} , ${Math.floor(Math.random()*255)})`
      //   }}/>
        <Image
            source={item}
            style={galleryImage}
        />
    )
}

  const imageArray =[
    require('../../assets/images/sport3.jpeg'),
    require('../../assets/images/sport4.jpeg'),
    require('../../assets/images/sport5.jpeg'),
    require('../../assets/images/sport6.jpeg')
  ]

  return (
    <View style={sliderView}>
    <Carousel
  //  layout={'tinder'} 
  // layoutCardOffset={`9`}
  enableMomentum={true}
        data={imageArray}
        renderItem={renderSlider}
        sliderWidth={scale(340)}
        itemWidth={scale(340)}
    />
</View>
  )
}

export default Slider

const styles = () => {
  return (
    StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      galleryImage: {
        width: scale(340),
        height: scale(179),
        borderRadius: scale(20),
      },
      sliderView: {
        width: '90%',
        alignSelf: 'center',
        height: scale(229),
        position: 'absolute',
        top: 53 + getTabBarHeight(),
        borderRadius: 20,
      },
    })
  )
}