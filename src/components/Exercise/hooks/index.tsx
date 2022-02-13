import {
  CircleExclamationSVG,
  DurationSVG,
  EmptyMarkSVG,
  FilledMarKSVG,
  PlayFileSVG,
} from '../../../assets/icons/index'
import { BasicColors, log, strings } from '../../../common/index'
import FadingModal from '../../../components/FadingModal'
import { AddToProgram, Pressable, Text } from '../../../components/index'
import { englishToPersianNum, ms } from '../../../helper/index'
import { showMessage } from 'react-native-flash-message'
import useAPI from '../../../hooks/useAPI'
import useRedux from '../../../hooks/useRedux'
import React, { useState } from 'react'
import { FlatList, View } from 'react-native'
import styles from '../styles'
import { Props } from '../models'

export const useComponent = (props: Props) => {
  const {
    description,
    title,
    time,
    files,
    setShowFile,
    setFilePath,
    exerciseId,
    exerciseData,
    userType,
    savedId,
  } = props

  const {
    exerciseTitleText,
    headerRowView,
    leftHeaderView,
    markPress,
    bodyPartView,
    durationView,
    durationSvg,
    introView,
    exclamationSvg,
    introContainerText,
    exerciseFileText,
    fileView,
    leftFileView,
    playFilePress,
    addToProgramView,
    emptyFileText,
    markView,
  } = styles

  const [addProgramModal, setAddProgramModal] = useState(false)
  const [changeisSave, setChangeisSave] = useState(1)
  const [saved, setSaved] = useState(false)
  const { Get, Save } = useRedux()
  const { athleteField, trainerField } = Get().app
  const { addTofavoritesAPI, removeFavoriteAPI, getfavoritesAPI } = useAPI()
  const { exerciseObject, savedExercise }: any = Get().user
  const [ isSaved , setIsSaved ] =  useState(-1) 
  const getfavorites = async () => {
    log(savedExercise, 'savedExercise78687')
    const savedList = await getfavoritesAPI()
    log(savedList, 'savedList78676786876')
    Save({ savedExercise: savedList }, 'user')
  }

  const markExercise = async () => {

    if (isSaved == -1) {
        setIsSaved(1)
        setAddProgramModal(true)
        setTimeout(() => {
          setAddProgramModal(false)
        }, 1000)
    } else if (isSaved == 1) {
        setIsSaved(-1)
        showMessage({
          message: strings.deleteFromSucess,
          type: 'success',
          duration: 2500
        })
    }

  }

  const AddToProgramModal = () => {
    return (
      <FadingModal status={addProgramModal}>
        <View style={addToProgramView}>
          <AddToProgram />
        </View>
      </FadingModal>
    )
  }
  const HeaderPart = () => {
    return (
      <View style={headerRowView}>
        <View style={leftHeaderView}>
          <Pressable wrapperStyle={markPress} onPress={markExercise} >
            <View style={markView}>
              {isSaved * changeisSave == 1 ? (
                <FilledMarKSVG width={ms(12, 0.5)} height={ms(16.9, 0.5)} />
              ) : (
                <EmptyMarkSVG width={ms(12, 0.5)} height={ms(16.9, 0.5)} />
              )}
            </View>
          </Pressable>
        </View>
        <Text type="bold" size="medium" style={exerciseTitleText}>
          {title}
        </Text>
      </View>
    )
  }
  const BodyPart = () => {
    return (
      <View style={bodyPartView}>
        <View style={durationView}>
          <Text type="medium" size="medium">
            {time ? englishToPersianNum(time.toString() , false) : '-'}{' '}
          </Text>
          <DurationSVG
            style={durationSvg}
            width={ms(12, 0.5)}
            height={ms(12, 0.5)}
          />
          <Text type="bold" size="medium">
            {strings.duration}
            {':'}
          </Text>
        </View>

        <View style={introView}>
          <View
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              zIndex: 100,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'right',
                writingDirection: 'rtl',
              }}
              type="bold"
              size="medium">
              {strings.introduction}
              {' :'}
            </Text>
            <CircleExclamationSVG
              width={ms(13, 0.5)}
              style={exclamationSvg}
              height={ms(13, 0.5)}
            />
          </View>
          <Text
            style={[introContainerText, { textAlign: 'left' }]}>
            {'                                         '}{'  '}
            {description == null ? strings.noDescription : `${description}`}
          </Text>
        </View>
        <Text style={exerciseFileText} size="medium" type="bold">
          {strings.exerciseFiles}
        </Text>
      </View>
    )
  }

  const renderEmptyList = () => {
    return (
      <Text style={emptyFileText} color={BasicColors.black}>
        {strings.noFile}
      </Text>
    )
  }

  const FooterPart = () => {
    return (
      <>
        <FlatList
          ListEmptyComponent={renderEmptyList}
          data={files}
          renderItem={renderFiles}
        />
      </>
    )
  }

  const renderFiles = ({ item }: { name: any; time: any }) => {
    const filePress = () => {
      setFilePath(item)
      setShowFile(true)
      Save({ hideTabbar: true }, 'app')
    }
    return (
      <Pressable onPress={filePress} wrapperStyle={fileView}>
        <View style={leftFileView}>
          <Text type="bold" size="xSmall">
            { item.type=='VIDEO' ? strings.videoFileSent : 'Image file uploaded'}
          </Text>
          <Text size='xxSmall'>{item.time}</Text>
        </View>
        <PlayFileSVG
          style={playFilePress}
          width={ms(28, 0.5)}
          height={ms(28, 0.5)}
        />
      </Pressable>
    )
  }

  return {
    HeaderPart,
    BodyPart,
    FooterPart,
    AddToProgramModal,
  }
}

export default useComponent
