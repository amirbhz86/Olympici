import {
  BadmintonSVG,
  RunningSVG,
  ShootingSVG,
  TaekwondoSVG,
  VolleyballSVG,
} from '../../../assets/icons/index'
import { strings } from '../../../common/index'
import React from 'react'
import { View } from 'react-native'
import styles from '../styles'

export const useComponent = () => {
  const { marginIcon } = styles
  const renderSportItem = (
    type:
      | 'volleyball'
      | 'shooting'
      | 'badminton'
      | 'running'
      | 'taekwondo'
      | 'select',
  ) => {
    switch (type) {
      case 'volleyball': {
        return {
          sportTitle: strings.volleyball,
          SportIcon: () => <VolleyballSVG />,
        }
      }
      case 'shooting': {
        return {
          sportTitle: strings.shooting,
          SportIcon: () => <ShootingSVG />,
        }
      }
      case 'badminton': {
        return {
          sportTitle: strings.badminton,
          SportIcon: () => <BadmintonSVG />,
        }
      }
      case 'running': {
        return {
          sportTitle: strings.running,
          SportIcon: () => <RunningSVG />,
        }
      }
      case 'taekwondo': {
        return {
          sportTitle: strings.taekwondo,
          SportIcon: () => <TaekwondoSVG />,
        }
      }
      case 'select': {
        return {
          sportTitle: strings.chooseSport,
          SportIcon: () => <View />,
        }
      }
    }
  }

  return {
    renderSportItem,
  }
}

export default useComponent
