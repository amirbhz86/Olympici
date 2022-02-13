import {
  MovementProgressSVG,
  PhysicalProgressSVG,
  TechnicalProgressSVG,
} from '../../../assets/icons/index'
import { log, MainColors, strings } from '../../../common/index'
import { Text } from '../../../components/index'
import { englishToPersianNum } from '../../../helper/index'
import useAPI from '../../../hooks/useAPI'
import useRedux from '../../../hooks/useRedux'
import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import PercentageCircle from 'react-native-percentage-circle'
import styles from '../styles'
let myProgress: any

export const useComponent = (navigation) => {
  const {
    progressRowView,
    leftRowProgressView,
    progressPercentText,
    offersView,
    offersText,
    offerDetailText,
  } = styles
  const [movementPercent, setMovementPercent] = useState(60)
  const [technicalPercent, setTechnicalPercent] = useState(70)
  const [pysicalPercent, setPysicalPercent] = useState(40)
  const [exercisePercent, setExercisePercent] = useState(90)
  const [description, setDescription] = useState('')
  const { Get } = useRedux()
  const { athleteField } = Get().app
  const { getProgressAPI } = useAPI()

  const prgoressBadRequest = (err) => {
    if (err.response.status == 405) {
      navigation.goBack()
    }
    if (err.response.data.detail == 'Not found.') {
      showMessage({
        message: strings.noProgressForYou,
        type: 'danger',
        duration: 2500,
      })
    }
  }

  const getMyProgress = async () => {
    let progressData = {
      athlete_field: athleteField,
    }
    myProgress = await getProgressAPI(progressData, prgoressBadRequest)
    log(myProgress,'myProgress79798')
    if (myProgress == null) {
      navigation.goBack()
      return
    }
    const {
      physical,
      technical,
      training,
      movement,
      description,
    } = myProgress.data.results[0]
    setMovementPercent(movement)
    setTechnicalPercent(technical)
    setPysicalPercent(physical)
    setExercisePercent(physical)
    setDescription(description)
  }

  useFocusEffect(
    React.useCallback(() => {
      // getMyProgress()
    }, []),
  )

  const renderProgress = ({ item }) => {
    return (
      <View style={progressRowView}>
        <View style={leftRowProgressView}>
          <PercentageCircle
            color={MainColors.accentDarker}
            borderWidth={4.5}
            radius={25}
            textStyle={{ color: 'white' }}
            percent={item.percent}>
            {item.Icon}
          </PercentageCircle>
          <Text type="bold" size="medium" style={progressPercentText}>
            {item.percent}
            {'%'}
          </Text>
        </View>
        <Text size="medium" type="bold">
          {item.title}
        </Text>
      </View>
    )
  }

  const MovementRow = () => {
    return (
      <View style={progressRowView}>
        <View style={leftRowProgressView}>
          <PercentageCircle
            color={MainColors.accentDarker}
            borderWidth={4.5}
            radius={25}
            textStyle={{ color: 'white' }}
            percent={movementPercent}>
            <MovementProgressSVG />
          </PercentageCircle>
          <Text type="bold" size="medium" style={progressPercentText}>
            {movementPercent && (movementPercent.toString())}
            {'%'}
          </Text>
        </View>
        <Text size="medium" type="bold">
          {strings.prgressOfMovement}
        </Text>
      </View>
    )
  }

  const TechnicalRow = () => {
    return (
      <View style={progressRowView}>
        <View style={leftRowProgressView}>
          <PercentageCircle
            color={MainColors.accentDarker}
            borderWidth={4.5}
            radius={25}
            textStyle={{ color: 'white' }}
            percent={technicalPercent}>
            <TechnicalProgressSVG />
          </PercentageCircle>
          <Text type="bold" size="medium" style={progressPercentText}>
            {technicalPercent &&
              technicalPercent.toString()}
            {'%'}
          </Text>
        </View>
        <Text size="medium" type="bold">
          {strings.progerssOfTechnical}
        </Text>
      </View>
    )
  }

  const PhysicalRow = () => {
    return (
      <View style={progressRowView}>
        <View style={leftRowProgressView}>
          <PercentageCircle
            color={MainColors.accentDarker}
            borderWidth={4.5}
            radius={25}
            textStyle={{ color: 'white' }}
            percent={pysicalPercent}>
            <Image source={require('../../../assets/icons/exerciseProgress.png')} />
          </PercentageCircle>
          <Text type="bold" size="medium" style={progressPercentText}>
            {pysicalPercent && (pysicalPercent.toString())}
            {'%'}
          </Text>
        </View>
        <Text size="medium" type="bold">
          {strings.progressOfPysical}
        </Text>
      </View>
    )
  }

  const ExerciseRow = () => {
    return (
      <View style={progressRowView}>
        <View style={leftRowProgressView}>
          <PercentageCircle
            color={MainColors.accentDarker}
            borderWidth={4.5}
            radius={25}
            textStyle={{ color: 'white' }}
            percent={exercisePercent}>
            <PhysicalProgressSVG />
          </PercentageCircle>
          <Text type="bold" size="medium" style={progressPercentText}>
            {exercisePercent && (exercisePercent.toString())}
            {'%'}
          </Text>
        </View>
        <Text size="medium" type="bold">
          {strings.progressOfExercise}
        </Text>
      </View>
    )
  }

  const OffersPart = () => {
    return (
      <View style={offersView}>
        <Text type="bold" size="medium" style={offersText}>
          {strings.suggestion}
        </Text>
        <Text size="small" style={offerDetailText}>
          {true
          ? strings.noSuggestForYou
          :  description }
        </Text>
      </View>
    )
  }

  return {
    TechnicalRow,
    renderProgress,
    OffersPart,
    MovementRow,
    PhysicalRow,
    ExerciseRow,
  }
}

export default useComponent
