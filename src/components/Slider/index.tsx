import React from 'react'
import SliderView from './slider-view'
import { Props } from './models'
import { StyleSheet , Image } from 'react-native'

const Slider = (props : Props ) => {
const { galleryImage } = styles()

  const renderSlider = ({ item } : any ) => {
    return (
        <Image
            source={item}
            style={galleryImage}
        />
    )
}

  return (
    <SliderView
      // renderSlider={renderSlider}
     {...props}
    />
  )
}

export default Slider

const styles = () => {
  return (
    StyleSheet.create({
      galleryImage : {
  
      }
    })
  )
}