import React from 'react';
import { Image } from 'react-native';
import styles from '../styles';


const useComponent = () => {
    const { galleryImage } = styles


    const renderSlider = ({ item } : any ) => {
        return (
            <Image
                source={item}
                style={galleryImage}
            />
        )
    }


    return {
        renderSlider,
    }
}
export default useComponent
