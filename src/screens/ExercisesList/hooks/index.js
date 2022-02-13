import { log, strings } from '../../../common/index'
import { englishToPersianNum, toFarsiNumber } from '../../../helper/index'
import { useAPI, useRedux } from '../../../hooks/index'
import { useFocusEffect } from '@react-navigation/native'
import moment from 'jalali-moment'
import React, { useEffect, useState } from 'react'
import { showMessage } from 'react-native-flash-message'
import { getFormatedDate } from 'react-native-modern-datepicker'

let todaySplited = getFormatedDate(new Date(), 'jYYYY/jMM/jDD').split('/')
let dayOfWeek
let diffrencenNumberDay = 0

const useComponent = (navigation) => {
  const [calendarStatus, setCalendarStatus] = useState(false)
  const [dateSelected, setDateSelected] = useState(
    toFarsiNumber(todaySplited[0]) +
      '/' +
      toFarsiNumber(todaySplited[1]) +
      '/' +
      toFarsiNumber(todaySplited[2]),
  )
  const { getExerciseAPI, getfavoritesAPI } = useAPI()
  const { Get, Save } = useRedux()
  const { athleteField, selectedDayOfWeek } = Get().app
  const { exerciseObject } = Get().user
  const [completedExercise, setCompletedExercise] = useState([])
  const [otherExercise, setOtherExercise] = useState([])
  const [loading, setLoading] = useState(false)

  const getExercises = async () => {
    if (athleteField !== '') {
      let completedExercise = [],
        otherExercise = []
      let exerciseData = {
        date: changeJalaliToMiladi(dateSelected),
        athlete_field: athleteField,
      }
      setLoading(true)
      const exercises = await getExerciseAPI(
        null,
        null,
        athleteField,
        exerciseData,
      )
      if ( !exercises ){
        navigation.goBack()
        return ;
      }
      for (let perExercise of exercises.results) {
        perExercise.is_done
          ? completedExercise.push(perExercise)
          : otherExercise.push(perExercise)
      }
      setCompletedExercise(completedExercise)
      setOtherExercise(otherExercise)
      Save(
        {
          exerciseObject: {
            ...exerciseObject,
            items: [...completedExercise, ...otherExercise],
          },
        },
        'user',
      )
      setLoading(false)
    } else {
      navigation.goBack()
      showMessage({
        message: strings.pleaseFillYourField,
        type: 'danger',
        duration: 2500,
      })
    }
  }
  const getfavorites = async () => {
    const savedList = await getfavoritesAPI(athleteField)
    Save({ savedExercise: savedList }, 'user')
  }

  useFocusEffect(
    React.useCallback(() => {
      // getfavorites()
    }, []),
  )

  useFocusEffect(
    React.useCallback(() => {
      // getExercises()
    }, [dateSelected]),
  )

  useEffect(() => {
    // let today = new Date(changeJalaliToMiladi(dateSelected)).getDay() + 1
    // if ( today !== 7 ){
    //   Save({ selectedDayOfWeek: today }, 'app')
    // }else if ( today == 7 ){
    //   Save({ selectedDayOfWeek: 0 }, 'app')
    // }
    // convert jalali miladi day to jalali weekend
  }, [])

  useEffect(() => {
    // dayOfWeek = new Date(changeJalaliToMiladi(dateSelected)).getDay() + 1
    // diffrencenNumberDay = selectedDayOfWeek ? selectedDayOfWeek - dayOfWeek : 0
    // let newMiliSecondDay =
    //   new Date(changeJalaliToMiladi(dateSelected)).getTime() +
    //   diffrencenNumberDay * 86400000
    // let newDate = getFormatedDate(new Date(newMiliSecondDay), 'jYYYY/jMM/jDD')
    // let splitedNewDate = newDate.split('/')
    // let editedDate =
    //   splitedNewDate[0] + '/' + splitedNewDate[1] + '/' + splitedNewDate[2]
    // setDateSelected(editedDate)
  }, [selectedDayOfWeek])

  const changeJalaliToMiladi = (date) => {
    let miladiDate = moment(englishToPersianNum(date, false), 'jYYYY/jMM/jDD')
    let year = miladiDate._i.split('-')[0]
    let month = miladiDate._i.split('-')[1]
    let day = miladiDate._i.split('-')[2]
    let editedDate = `${year}-${month}-${day}`
    return editedDate
  }

  const hidePicker = () => {
    setCalendarStatus(false)
  }
  return {
    completedExercise,
    otherExercise,
    calendarStatus,
    setCalendarStatus,
    hidePicker,
    setDateSelected,
    dateSelected,
    loading,
  }
}

export default useComponent
