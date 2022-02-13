import { MainColors } from '../../common/index'
import React,{ memo } from 'react'
import { Rating as RaitngLib } from 'react-native-ratings'
import { Props } from './models'
import styles from './styles'

const Rating = (props: Props) => {
  const { starContainerLib } = styles
  const { numberOfStars, tintColor } = props
  return (
    <>
      <RaitngLib
        {...props}
        type="custom"
        defaultRating={numberOfStars}
        readonly={true}
        starContainerStyle={{ backgroundColor: 'blue' }}
        startingValue={numberOfStars}
        ratingColor={MainColors.accentDarker}
        ratingBackgroundColor="#c8c7c8"
        ratingCount={5}
        imageSize={15}
        style={starContainerLib}
      />
    </>
  )
}

export default memo(Rating)
