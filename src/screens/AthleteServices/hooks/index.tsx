import { KEYS, log, strings } from '../../../common/index'
import useAPI from '../../../hooks/useAPI'
import useRedux from '../../../hooks/useRedux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { showMessage } from 'react-native-flash-message'
let notifsVar: any = []

export const useContainer = (route: any) => {
  const [choosingSportStatus, setChoosingSportStatus] = useState(false)
  const [topMenuTitle, setTopMenuTitle] = useState(strings.chooseSport)
  const [iconPath, setIconPath] = useState('')
  const [athleteMyFields, setAthleteMyFields] = useState([])
  const [ newArray , setNewArray ] = useState(false)
  const { myFieldAPI, getfavoritesAPI, getMyTrainerProfileAPI, myFieldIdAPI , getMyTransactionsAPI } = useAPI()
  const { Save, Get } = useRedux()
  const [ notifs, setNotifs] = useState([])
  const { athleteField } = Get().app
  const { myField, notifications, newNotif } = Get().user


  // useEffect(() => {
  //   if ( notifications.length==0 ){
  //     notifsVar=[]
  //     log('khali ast')
  //   }
  //   setNotifs(notifications)
  // }, [notifications])

  const notifWebsocket = async () => {
    const token: any = await AsyncStorage.getItem(KEYS.STORAGE.TOKENS)
    let tokensObject = JSON.parse(token)
    const ws = new WebSocket(`wss://sporty.rahkarstudio.com/ws?authorization=Bearer+${tokensObject.access_token}`);

    ws.onmessage = function (evt) {
      notifsVar.push({
        body : evt.data,
        title : '' ,
        created_at : new Date(),
      })
      
      Save({ notifications: notifsVar }, 'user')
      Save({ newNotif : true }, 'user')
    }
    ws.onopen = function (evt: any) {
      console.log(evt, "connected")
    }
    ws.onclose = function (evt) {
      console.log(evt, "disconnected!");
      setTimeout(() => {
        notifWebsocket()
      }, 1000)
    }
  }

  


  useEffect(() => {
    // getMyField()
    // getAsyncMyField()
    // getfavorites()
    // notifWebsocket()
  }, [])


  useEffect(() => {
    // athleteField !== '' && getMyCoachProfile()
  }, [athleteField])


  const getMyCoachProfile = async () => {
    // const coachProfile = await getMyTrainerProfileAPI(athleteField, getProfileError)
    // if (coachProfile) {
      // Save({ myCoach: coachProfile }, 'user')
    // }
  }


  const getProfileError = (err: any) => {
    showMessage({
      message: `${strings.erroIngetProfile}\n${strings.checkConnection}\n ۲-${strings.addTrainerYourSelf}`,
      type: 'danger',
      duration: 5000,
    })
  }


  const getAsyncMyField = async () => {
    const jsonAthleteField: any = await AsyncStorage.getItem(
      KEYS.STORAGE.ATHLETE_FIELD,
    )
    let asyncMyField = JSON.parse(jsonAthleteField)
    const myField = await myFieldIdAPI(asyncMyField.id)
    setIconPath(myField.field_obj.images[0].image)
    setTopMenuTitle(myField.field_obj.title)
    Save({ athleteField: asyncMyField.id }, 'app')
  }


  const getfavorites = async () => {
    const savedList = await getfavoritesAPI()
    Save({ savedExercise: savedList }, 'user')
  }

  const myfieldBadRequest = (err) => {
    if (err.response.status == 404) {
      showMessage({
        message: `${strings.youDontHaveAnyActivePlan}\n${strings.visitSiteandBuyPlan}`,
        type: 'danger',
        duration: 2500,
      })
    }
  }


  const getMyField = async () => {
    const myFields = await myFieldAPI(myfieldBadRequest)
    Save({ myField: myFields.results }, 'user')
    // setAthleteMyFields(myFields.results)
  }


  const oppositeStatus = () => {
    setChoosingSportStatus((value) => !value)
  }



  const onPressSportList = async (
    athleteField: any,
    title: any,
    icon: any
  ) => {
    Save({ athleteField: athleteField }, 'app')
    setIconPath(icon)
    setTopMenuTitle(title)
    oppositeStatus()
    await AsyncStorage.setItem(
      KEYS.STORAGE.ATHLETE_FIELD,
      JSON.stringify({
        id: athleteField,
      }),
    )
  }




  return {
    iconPath,
    oppositeStatus,
    choosingSportStatus,
    topMenuTitle,
    setTopMenuTitle,
    onPressSportList,
    myField,
  }
}

export default useContainer
