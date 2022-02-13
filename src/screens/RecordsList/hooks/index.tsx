import { SquarePlusSVG } from '../../../assets/icons/index'
import { BasicColors, log, MainColors, strings } from '../../../common/index'
import {
  Calendar,
  Input,
  PinkModal,
  Pressable,
  RecordItem,
  Text,
} from '../../../components/index'
import { englishToPersianNum } from '../../../helper/index'
import { useAPI, useRedux } from '../../../hooks/index'
import moment from 'jalali-moment'
import React, { useEffect, useState } from 'react'
import { ScrollView, View, ActivityIndicator } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import styles from '../styles'

export const useComponent = (navigation) => {
  const {
    addNewRecordView,
    detailText,
    lineView,
    addRecordRowView,
    headerOfRecordsView,
    exercisePress,
    championPress,
    recordsView,
    recordItem,
    squarePlusPress,
    introInputLogin,
    textInputIntroInputLogin,
    savePress,
    inputsView,
    noRecordText,
  } = styles
  const [recordStatus, setRecordStatus] = useState<'exercise' | 'champion'>(
    'exercise',
  )
  const [modalType, setModalType] = useState<
    'nothing' | 'calendar' | 'time' | 'addModal'
  >('nothing')
  const [calendarStatus, setCalendarStatus] = useState(false)
  const [dateSelected, setDateSelected] = useState(undefined)
  const [calendarMode, setCalendarMode] = useState<'calendar' | 'time'>(
    'calendar',
  )
  const [timer, setTimer] = useState()
  const [championRecords, setChampionRecords] = useState([
    { 
      record : '20 min' ,
      datetime : '2020/05/20' ,
      description : 'Lorem ipsum 1'
    },
    { 
      record : '12 min' ,
      datetime : '2020/05/04' ,
      description : 'Lorem ipsum 2'
    }
  ])
  const [exerciseRecords, setExerciseRecords] = useState([
    { 
      record : '25 min' ,
      datetime : '2020/05/20' ,
      description : 'Lorem ipsum 1'
    },
    {
      record : '30 min' ,
      datetime : '2020/05/04' ,
      description : 'Lorem ipsum 2'
    },
    { 
      record : '40 min' ,
      datetime : '2020/05/01' ,
      description : 'Lorem ipsum 3'
    }
  ])
  const [recordNumber, setRecordNumber] = useState()
  const [introduction, setIntroduction] = useState('')
  const [records, setRecords] = useState([])
  const [dateSent, setDateSent] = useState('')
  const { getRecordsAPI, addRecordAPI } = useAPI()
  const { Get, Save } = useRedux()
  const { athleteField } = Get().app
  // const {
  //   loading,
  //   setLoading,
  //   finished,
  //   loadList
  // } = useLazyLoad(
  //   records,
  //   setRecords,
  //   getRecordsAPI,
  //   20,
  //   true,
  //   (err: any) => {
  //     if (err.response.status === 405) {
  //       navigation.goBack()
  //     }
  //   })


  useEffect(() => {
    // loadList()
  }, [])

  useEffect(() => {
    // seperateRecords()
    log(records,'ddd')
  }, [records])

  const oppositeCalendarStatus = () => {
    setCalendarStatus((value) => !value)
    setModalType('addModal')
  }

  const renderEmptyList = () => {
    // return  !loading ? 
    // (
    //   <Text style={noRecordText}>
    //     {strings.noRecordFind}
    //   </Text>
    // )
    // : null
  }

  const renderFlatListFooter = () => {
    // return !finished && loading ?
    //   <ActivityIndicator />
    //   : null
  }

  const seperateRecords = async () => {
    let championArary: any = []
    let exerciseArray: any = []
    for (let perRecord of records) {
      if (perRecord.record_type == '0') {
        exerciseArray.push(perRecord)
      } else if (perRecord.record_type == '1') {
        championArary.push(perRecord)
      }
    }
    // setChampionRecords(championArary)
    // setExerciseRecords(exerciseArray)
  }


  const AddRecord = () => {
    return (
      <View style={addNewRecordView}>
        <Text size="xSmall" style={detailText}>
          NULL
        </Text>
        <View style={lineView} />
        <AddRecordRow />
      </View>
    )
  }
  const AddRecordRow = () => {
    return (
      <View style={addRecordRowView}>
        <Text type="bold" size="small" color={MainColors.text}>
          {strings.addRecord}
          {'!'}
        </Text>
        <Pressable
          onPress={() => setModalType('addModal')}
          wrapperStyle={squarePlusPress}>
          <SquarePlusSVG width={20} height={18} />
        </Pressable>
      </View>
    )
  }
  const HeaderOfRecords = () => {
    return (
      <View style={headerOfRecordsView}>
        <Pressable
          wrapperStyle={[
            exercisePress,
            {
              backgroundColor:
                recordStatus == 'exercise'
                  ? MainColors.primaryLighter
                  : undefined,
            },
          ]}
          onPress={() => setRecordStatus('exercise')}>
          <Text
            color={
              recordStatus == 'exercise'
                ? BasicColors.white
                : MainColors.unSelectedItem
            }>
            {strings.exerciseRecords}
          </Text>
        </Pressable>
        <Pressable
          wrapperStyle={[
            championPress,
            {
              backgroundColor:
                recordStatus == 'champion'
                  ? MainColors.primaryLighter
                  : undefined,
            },
          ]}
          onPress={() => setRecordStatus('champion')}>
          <Text
            color={
              recordStatus == 'champion'
                ? BasicColors.white
                : MainColors.unSelectedItem
            }>
            {strings.championRecords}
          </Text>
        </Pressable>
      </View>
    )
  }

  const renderRecords = ({ item, index }: { item: any; index: number }) => {
    return (
      <>
        {index !== 0 && <View style={lineView} />}
        <RecordItem
          style={recordItem}
          recordValue={item.record}
          date={item.datetime}
          detail={item.description}
        />
      </>
    )
  }

  const hidePicker = () => {
    if (modalType == 'addModal') {
      setDateSelected('')
      setTimer('')
      setRecordNumber('')
      setIntroduction('')
      setModalType('nothing')
    }
    modalType == 'calendar' && setModalType('addModal')
    modalType == 'time' && setModalType('addModal')
  }

  const closePinkModal = () => {
    if (modalType == 'calendar' || modalType == 'time') {
      setModalType('addModal')
    } else {
      setModalType('nothing')
      setDateSelected('')
      setTimer('')
      setRecordNumber('')
      setIntroduction('')
    }
  }

  const renderContent = () => {
    if (modalType == 'addModal') {
      return (
        <View>
          <PinkModal
            closeOnPress={closePinkModal}
            modalTitle={strings.addNewRecord}>
            <ScrollView>
              <View style={inputsView}>
                <Input
                  onPress={() => {
                    setModalType('calendar')
                    setCalendarMode('calendar')
                  }}
                  value={dateSelected}
                  title={strings.date}
                />
                <Input
                  onPress={() => {
                    setCalendarMode('time')
                    setModalType('calendar')
                  }}
                  value={timer}
                  title={strings.time}
                />
                <Input
                  keyboardType={'number-pad'}
                  onChangeValue={(value) => setRecordNumber(value)}
                  value={englishToPersianNum(recordNumber)}
                  title={strings.numberRecord}
                />
                <Input
                  onChangeValue={(value) => setIntroduction(value)}
                  multiline={true}
                  height={119}
                  value={englishToPersianNum(introduction)}
                  style={introInputLogin}
                  textInputStyle={textInputIntroInputLogin}
                  title={`${strings.introduction}:`}
                  state="vertical"
                />
                <Pressable onPress={sendRecord} wrapperStyle={savePress}>
                  <Text
                    type="bold"
                    size="small"
                    color={MainColors.accentDarker}>
                    {strings.save}
                  </Text>
                </Pressable>
              </View>
            </ScrollView>
          </PinkModal>
        </View>
      )
    } else if (modalType == 'calendar') {
      return (
        <View>
          <Calendar
            mode={calendarMode}
            calendarStatus={true}
            oppositeCalendarStatus={oppositeCalendarStatus}
            setTimer={(value) => setTimer(value)}
            setDateSent={(value) => setDateSent(value)}
            setDateSelected={(value) => setDateSelected(value)}
          />
        </View>
      )
    } else {
      return <></>
    }
  }

  const sendRecord = async () => {
    setDateSelected('')
    setTimer('')
    setRecordNumber('')
    setIntroduction('')
    setModalType('nothing')
    let englishDate: any = moment(
      englishToPersianNum(dateSelected, false),
      'jYYYY/jMM/jDD',
    )

    let year = englishDate._i.split('-')[0]
    let month = englishDate._i.split('-')[1]
    let day = englishDate._i.split('-')[2]
    let timeSent = timer.replace(/\s+/g, '')
    let sentDate = year + '-' + month + '-' + day + 'T' + englishToPersianNum(timeSent, false)

    let recordsData = {
      athlete_field: athleteField,
      description: introduction,
      datetime: sentDate,
      record: recordNumber,
      record_type: recordStatus == 'champion' ? '1' : '0',
    }
    if (recordNumber && timeSent) {
      const result = await addRecordAPI(recordsData)
      getRecordsFun()
      result !== null ?
        showMessage({
          message: strings.sendRecord,
          type: 'success',
          duration: 2500,
        })
        : showMessage({
          message: strings.errorMessage,
          type: 'danger',
          duration: 2500,
        })
    } else {
      showMessage({
        message: strings.fillAllFields,
        type: 'danger',
        duration: 2500,
      })
    }
  }

  return {
    // renderEmptyList,
    renderFlatListFooter,
    // loadList,
    AddRecord,
    championRecords,
    renderRecords,
    exerciseRecords,
    HeaderOfRecords,
    setCalendarStatus,
    dateSelected,
    renderContent,
    setDateSelected,
    calendarStatus,
    oppositeCalendarStatus,
    calendarMode,
    setCalendarMode,
    modalType,
    setModalType,
    hidePicker,
    setRecordNumber,
    setIntroduction,
    recordStatus,
    Input,
  }
}

export default useComponent
