// import { EndPoints } from '@api/Model'
import { KEYS, log, strings } from '../common/index'
import { useRedux } from '../hooks/index'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { showMessage } from 'react-native-flash-message'
import RNRestart from 'react-native-restart'

export const PROTOCOL = 'https://'
export const BASE_URL = 'sporty.rahkarstudio.com/'
export const TOKEN_PREFIX = 'Bearer'
export const URL = `${PROTOCOL}${BASE_URL}`

export const END_POINTS = {
  myPlan : 'ironbank/api/my-plans/',
  myTransactions : 'ironbank/api/my-transactions/' ,
  search : '/sporty/api/search/' ,
  checkUserName : '/sporty/api/check-username/' ,
  trainerChart: 'trainer/api/records/chart-data/',
  athleteChart : 'athlete/api/records/chart-data/' ,
  otp: 'auth/otp/',
  gallery: 'gallery/',
  favorites : 'sporty/api/favorites/',
  sportyPlan: 'sporty/api/plan/',
  coachMyField: 'trainer/api/fields',
  exerciseType: 'sporty/api/exercise-type/',
  serverExercises: 'sporty/api/exercise/',
  trainerNotifs: 'trainer/api/messages/',
  athleteNotifs: 'athlete/api/messages/',
  myTrainer: 'my-trainer/',
  athleteMyField: 'athlete/api/my-fields/',
  progress: 'athlete/api/progress/',
  trainerProgress : 'trainer/api/progress/' ,
  profile: 'sporty/api/profile/',
  addTrainer: 'add-trainer/',
  contactUs: 'phrase/api/contact-us/',
  commentVideoList: 'phrase/api/comment-video/',
  athletes: 'trainer/api/athletes/',
  answerRequests: 'trainer/api/requests/',
  athleteContracts: "athlete/api/contracts/",
  fieldInfo: 'api/profile/',
  phrases: 'phrase/api/phrases/',
  athleteRequest: '/trainer/api/requests/',
  signUp: 'sporty/api/signup/',
  signIn: 'auth/token/',
  verify: 'users/verify/',
  fields: 'sporty/api/fields/',
  trainerRecords: 'trainer/api/records/',
  records: 'athlete/api/records/',
};

const useApiCore = () => {
  // const { alert } = useMessage()
  const { Save } = useRedux()

  const getAuthToken = async () => {
    const tokens = await AsyncStorage.getItem(KEYS.STORAGE.TOKENS)
    if (tokens) {
      let tokensObject = JSON.parse(tokens)
      return `${TOKEN_PREFIX} ${tokensObject.access_token}`
    } else {
      return ''
    }
  }
  const fetchUrl = async (options, onUploadProgress) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          ...options,
          baseURL: URL,
          headers: {
            ...options.headers,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          validateStatus: (status) => {
            // log('status: ', status)
            if (status < 500) {
              if (status >= 200 && status < 400) {
                return true
              } else if (status === 401 || status === 403) {
                // const refreshResult = refreshToken()
                // log(refreshResult,'refreshResult')
                // AsyncStorage.clear().finally(() => { });
                // refreshTokenFunction()
                return false
              } else if (status === 404) {
                showMessage({
                  message: strings.serverNotFound,
                  type: 'danger',
                  duration: 2500,
                })
              } else if (status === 405) {
                showMessage({
                  message: strings.youDontHaveAnyActivePlan,
                  type: 'danger',
                  duration: 3500,
                })
              } else if (status === 400) {
                log('Status request 400')
              } else {
                // alert.show({
                //   desc: strings.anUnknownErrorOccurred,
                //   cancelable: true,
                //   buttonTitle: strings.close,
                //   onButtonPressed: () => {
                //     alert.hidden()
                //   },
                // })
              }
            } else {
              Save({ unreachable: true }, 'app')
              // alert.show({
              //   desc: strings.unableToFetchDataFromServer,
              //   cancelable: false,
              //   buttonTitle: strings.retry,
              //   onButtonPressed: () => {
              //     RNRestart.Restart()
              //   },
              // })
            }
            return false
          },
          timeout: 15000,
          onUploadProgress: (progress) => {
            if (onUploadProgress) {
              onUploadProgress(progress)
            }
          },
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
  }
  const api = {
    get: async (
      endPoint: string[],
      params,
      authorization = false,
      customHeader?: object,
    ) => {
      let currentEndPoint = ''
      if (typeof endPoint === 'object') {
        endPoint.map((address) => {
          currentEndPoint = `${currentEndPoint}${`${address}` in END_POINTS
              ? `${END_POINTS[address]}`
              : `${address}/`
            }`
        })
      } else if (typeof endPoint === 'string') {
        currentEndPoint = END_POINTS[endPoint]
      }
      let options = { method: 'GET', url: currentEndPoint, params }
      if (authorization) {
        options = {
          ...options,
          headers: {
            ...customHeader,
            Authorization: await getAuthToken(),
          },
        }
      }
      return fetchUrl(options)
    },
    post: async (
      endPoint:  stirng[],
      data,
      authorization = false,
      onUploadProgress?,
    ) => {
      let currentEndPoint = ''
      if (typeof endPoint === 'object') {
        endPoint.map((address) => {
          currentEndPoint = `${currentEndPoint}${`${address}` in END_POINTS
              ? `${END_POINTS[address]}`
              : `${address}/`
            }`
        })
      } else if (typeof endPoint === 'string') {
        currentEndPoint = END_POINTS[endPoint]
      }

      let options = { method: 'POST', url: currentEndPoint, data }
      if (authorization) {
        options = {
          ...options,
          headers: {
            Authorization: await getAuthToken(),
          },
        }
      }
      return fetchUrl(options, onUploadProgress)
    },
    put: async (
      endPoint ,
      data,
      authorization = false,
      onUploadProgress?,
    ) => {
      let options = { method: 'PUT', url: END_POINTS[endPoint], data }
      if (authorization) {
        options = {
          ...options,
          headers: {
            Authorization: await getAuthToken(),
          },
        }
      }
      return fetchUrl(options, onUploadProgress)
    },
    patch: async (
      endPoint ,
      data,
      authorization = false,
      onUploadProgress?,
    ) => {
      let currentEndPoint = ''
      if (typeof endPoint === 'object') {
        endPoint.map((address) => {
          currentEndPoint = `${currentEndPoint}${`${address}` in END_POINTS
              ? `${END_POINTS[address]}`
              : `${address}/`
            }`
        })
      } else if (typeof endPoint === 'string') {
        currentEndPoint = END_POINTS[endPoint]
      }
      let options = { method: 'PATCH', url: currentEndPoint, data }
      if (authorization) {
        options = {
          ...options,
          headers: {
            Authorization: await getAuthToken(),
          },
        }
      }
      return fetchUrl(options, onUploadProgress)
    },
    delete: async (
      endPoint: ( number)[],
      params: { [key: string]: any } | null,
      authorization = false,
    ) => {
      let currentEndPoint = ''
      if (typeof endPoint === 'object') {
        endPoint.map((address) => {
          currentEndPoint = `${currentEndPoint}${`${address}` in END_POINTS
              ? `${END_POINTS[address]}`
              : `${address}/`
            }`
        })
      } else if (typeof endPoint === 'string') {
        currentEndPoint = END_POINTS[endPoint]
      }

      let options = {
        method: 'DELETE',
        url: currentEndPoint,
        params,
        headers: {},
      }
      if (authorization) {
        options = {
          ...options,
          headers: {
            Authorization: await getAuthToken(),
          },
        }
      }
      return fetchUrl(options)
    },
  }

  return {
    getAuthToken,
    fetchUrl,
    api,
  }
}

export default useApiCore
