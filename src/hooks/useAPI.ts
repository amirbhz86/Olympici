import useApiCore from '../api/useApiCore'
import { CONFIGURATION_REFRESH_TOKEN,  } from '../common/index'
import { showMessage } from 'react-native-flash-message'

const useAPI = () => {
    const {api} = useApiCore()

    const apiErrorMessage = (err: any, location: string) => {
      console.log(err , err.response , location , 'err');
      
        const {status, data} = err.response
        console.log(
            `Response Error: (${location})\n-----------------------\n`,
            err.response,
        )
        if (status === 400) {
            showMessage({
                message: data.message,
                type: 'danger',
                duration: 2500,
            })
        }
    }


    const athleteChartAPI = async (athleteId: any, data: any, badRequestCallback?: (err?: any) => void) => {
      return await api.get(['athleteChart', athleteId], data, true).then((response: any) => {
        return response.data
      }).catch((err) => {
        badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'signUpAPI')
        return null
      })
    }
  
  
    const trainerChartAPI = async (athleteId: any, data: any, badRequestCallback?: (err?: any) => void) => {
      return await api.get(['trainerChart', athleteId], data, true).then((response: any) => {
        return response
      }).catch((err) => {
        badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'signUpAPI')
        return null
      })
    }


    // const =async(badRequestCallback?: (err?: any) => void )=>{
    //   return await api.('', , true ).then((response : any)=>{
    //     return response.data
    //   }).catch((err)=>{
    //     badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'signUpAPI')
    //     return null
    //   })
    // }


    const trainerGetProgressAPI = async (data: any, badRequestCallback?: (err?: any) => void) => {
        return await api.get('progress', data, true).then((response: any) => {
            return response.data.results
        }).catch((err) => {
            badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'signUpAPI')
            return null
        })
    }


    const addProgressAPI = async (
        data: any,
        id : any ,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .patch(['trainerProgress', id ], data, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'addProgressAPI')
                return null
            })
    }


    const submitContactUseMessage = async (
        data: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .post('contactUs', data, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'addProgressAPI')
                return null
            })
    }


    const getFieldsAPI = async (badRequestCallback?: (err?: any) => void) => {
        return await api
            .get('fields', null, true)
            .then((response: any) => {
                return response.data.results
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getFieldsAPI')
                return null
            })
    }


    const getProgressAPI = async (
        data: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .get('progress', data, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getProgress')
                return null
            })
    }


    const getMyAthleteAPI = async (badRequestCallback?: (err?: any) => void) => {
        return await api
            .get('athletes', null, true)
            .then((response: any) => {
                return response.data.results
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getMyAthleteAPI')
                return null
            })
    }


    const addToMyFieldAPI = async (
        data: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .post('athleteMyField', data, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'addToMyFieldAPI')
                return null
            })
    }


    const updateProfileAPI = async (
        data: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .patch('profile', data, true)
            .then((response: any) => {
              console.log(response,'response 7897987')
                return response
            })
            .catch((err) => {
                badRequestCallback
                   ? badRequestCallback(err)
                   : apiErrorMessage(err, 'addToMyFieldAPI')
                return null
            })
    }


    const createExerciseAPI = async (
        data: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .post('serverExercises', data, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'createExerciseAPI')
                return null
            })
    }


    const getExerciseTypeAPI = async (
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .get('exerciseType', null, true)
            .then((response: any) => {
                return response.data.results
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getExerciseTypeAPI')
                return null
            })
    }


    const getCoachMyField = async (badRequestCallback?: (err?: any) => void) => {
        return await api
            .get('coachMyField', null, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getCoachMyField')
                return null
            })
    }


    const editProfileAPI = async (
        data: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .patch('profile', data, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'signUpAPI')
                return null
            })
    }


    const sendMessageAPI = async (
        data: object,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .post('trainerNotifs', data, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'sendMessage')
                return null
            })
    }


    const removeFavoriteAPI = async (
      savedId: any,
      badRequestCallback?: (err?: any) => void,
  ) => {
      return await api
          .delete(['favorites' , savedId ], null , true)
          .then((response: any) => {
              return response
          })
          .catch((err) => {
              badRequestCallback
                  ? badRequestCallback(err)
                  : apiErrorMessage(err, 'removeFavoriteAPI')
              return null
          })
  }


    const addTofavoritesAPI = async (
        data: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .post('favorites', data, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'addTofavoritesAPI')
                return null
            })
    }


    const getfavoritesAPI = async (badRequestCallback?: (err?: any) => void) => {
        return await api
            .get('favorites', null, true)
            .then((response: any) => {
                return response.data.results
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getfavoritesAPI')
                return null
            })
    }


    const removePlanExerciseAPI = async (
        id: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .delete(['serverExercises', id], null, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'removeExerciseAPI')
                return null
            })
    }


    const removeExerciseAPI = async (
        id: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .delete(['serverExercises', id], null, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'removeExerciseAPI')
                return null
            })
    }


    const changeExerciseAPI = async (
        athlete_field: any,
        planId: any,
        data: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .patch(['sportyPlan', `/${athlete_field}`, planId], data, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getExerciseAPI')
                return null
            })
    }


    const getExerciseAPI = async (
        limit?: number,
        offset?: number,
        athlete_field?: any,
        data?: any,
        badRequestCallback?: (err?: any) => void,
    ) => {

        return await api
            .get(
                ['sportyPlan', `${athlete_field}`],
                {
                    ...data,
                    offset,
                    limit,
                },
                true,
            )
            .then((response: any) => {
                return response.data
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getExerciseAPI')
                return null
            })
    }


    const sendExerciseAPI = async (
        athlete_field?: any,
        data?: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
      console.log('send exercise223');
      
        return await api
            .post(['sportyPlan', `/${athlete_field}`], data, true)
            .then((response: any) => {
              console.log('response' , response);
                return response
            })
            .catch((err) => {
                console.log(err, 'errrrrr')
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'sendExerciseAPI')
                return null
            })
    }


    const removeAthleteMyFieldAPI = async (
        id: any,
        data: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .delete(['athleteMyField', `/${id}`], data, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'signUpAPI')
                return null
            })
    }


    const removeTrainerMyFieldAPI = async (
        id: any,
        data: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .delete(['coachMyField', `/${id}`], data, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'signUpAPI')
                return null
            })
    }


    const addToCoachMyFieldAPI = async (
        data: any,
        trainerField: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .post(['coachMyField', trainerField], data, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'addToCoachMyFieldAPI')
                return null
            })
    }


    const getTrainerNotifs = async (badRequestCallback?: (err?: any) => void) => {
        return await api
            .get('trainerNotifs', null, true)
            .then((response: any) => {
                return response.data.results
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getTrainerNotifs')
                return null
            })
    }

    const myFieldAPI = async (badRequestCallback?: (err?: any) => void) => {
        return await api
            .get('athleteMyField', null, true)
            .then((response: any) => {
                return response.data
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'myFieldAPI')
                return null
            })
    }

    const myFieldIdAPI = async (id:any ,badRequestCallback?: (err?: any) => void) => {
      return await api
          .get( [ 'athleteMyField', id ], null, true)
          .then((response: any) => {
              return response.data
          })
          .catch((err) => {
              badRequestCallback
                  ? badRequestCallback(err)
                  : apiErrorMessage(err, 'myFieldAPI')
              return null
          })
  }


    const getMyTrainerProfileAPI = async (
        athleteField: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .get(['athleteMyField', `${athleteField}`, 'myTrainer'], null, true, {})
            .then((response: any) => {
                return response.data
            })
            .catch((err) => {
                console.log(err, 'errrr')
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getProfile')
                return null
            })
    }


    const answerAthleteRequestsAPI = async (
        id: any,
        data: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .patch(['athletes', id], data, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'answerRequestsAthlete')
                return null
            })
    }


    const getAthleteRequestAPI = async (
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .get('athletes', null, true)
            .then((response: any) => {
                return response.data.results
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getAthleteRequest')
                return null
            })
    }


    const getServerExercises = async (limit?: number, offset?: number, badRequestCallback?: (err?: any) => void) => {
        return await api.get('serverExercises', {offset, limit}, true).then((response: any) => {
            return response.data
        }).catch((err) => {
            badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getServerExercises')
            return null
        })
    }


    const getAthleteNotifs = async (badRequestCallback?: (err?: any) => void) => {
        return await api.get('athleteNotifs', null, true).then((response: any) => {
            return response.data
        }).catch((err) => {
            badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getAthleteNotifs')
            return null
        })
    }


    const getMessagesAPI = async (
        setLoading: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        setLoading(true)
        return await api
            .get('messages', null, true)
            .then((response: any) => {
                setLoading(false)
                return response.data
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'signUpAPI')
                setLoading(false)
                return null
            })
    }


    const addRecordAPI = async (
        data: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .post('records', data, true)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'addRecordAPI')
                return null
            })
    }


    const getRecordsAPI = async (
       limit ?: number , 
       offset ?: number , 
        badRequestCallback?: (err?: any) => void
    ) => {
        return await api
            .get('records', { limit , offset }, true)
            .then((response: any) => {
                return response.data
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getRecordsAPI')
                return null
            })
    }


    const trainerGetRecordsAPI = async (
        limit ?: number , 
        offset ?: number , 
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .get('trainerRecords', { limit , offset } , true)
            .then((response: any) => {
                return response.data
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'trainerGetRecordsAPI')
                return null
            })
    }


    const signUpAPI = async (
        data: object,
        userType: 'athlete' | 'trainer',
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .post(['signUp', userType], data, false)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'signUpAPI')
                return null
            })
    }


    const sendOtpAPI = async (
        data: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        const loginData = {
            username: data.username,
            password: data.password,
            client_id: 'web',
            client_secret: 'web',
            grant_type: 'password',
        }
        return await api
            .post('signIn', loginData, false)
            .then((response: any) => {
                return response.data
            })
            .catch((err) => {
              console.log('err',err);
              
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'sendOtpAPI')
                return null
            })
    }


    const loginOtpAPI = async (
        data: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .post('otp', data, false)
            .then((response: any) => {
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'loginOtpAPI')
                return null
            })
    }


    const refreshTokenAPI = async (
        data: any,
        badRequestCallback?: (err?: any) => void,
    ) => {
        console.log('data is:', data)
        let dataApi = {
            ...CONFIGURATION_REFRESH_TOKEN,
            refresh_token: data.refresh,
        }
        return await api
            .post('signIn', dataApi, false)
            .then((response: any) => {
                console.log('response:', response)
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'refreshTokenAPI')
                return null
            })
    }


    const tokenVerificationAPI = async (
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .get('profile', null, true, {})
            .then((response: any) => {
                console.log('response:', response)
                return response
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'tokenVerificationAPI')
                return null
            })
    }


    const getBalancesAPI = async (badRequestCallback?: (err?: any) => void) => {
        return await api
            .get('balances', null, true)
            .then((response: any) => {
                console.log('response: ', response)
                return response.data.content
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getUserProfileAPI')
                return null
            })
    }


    const getPhrasesAPI = async (
        data: { slugs: string[] },
        badRequestCallback?: (err?: any) => void,
    ) => {
      console.log('ajkdshaskjdhasjkdahsk get');
      
        return await api
            .post('phrases', data, true)
            .then((response: any) => {
                console.log('response: ', response)
                return response.data
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getPointsAPI')
                return null
            })
    }


    const getProfileAPI = async (badRequestCallback?: (err?: any) => void) => {
        return await api
            .get('profile', null, true)
            .then((response: any) => {
                console.log('response: profile ', response)

                const {
                    bio ,
                    physical_condition ,
                    user_obj,
                    weight,
                    height,
                    age,
                    education,
                    id,
                    fields_lst,
                    birth_day,
                    birth_place,
                    father_name,
                    sex,
                    honors,
                    certificates,
                    activity_time ,
                    code ,
                    cert_file
                } = response.data

                return {
                    cert_file : cert_file ,
                    trainerCode : code ,
                    bio : bio ,
                    father_name: father_name,
                    birth_place: birth_place,
                    birth_day: birth_day,
                    fields: fields_lst,
                    imageProfile: user_obj.profile,
                    id: user_obj.id,
                    username: user_obj.username,
                    email: user_obj.email,
                    nameAndFamily: user_obj.first_name + user_obj.last_name,
                    age: age,
                    education: education,
                    height: height,
                    sex: sex,
                    state: user_obj.address.state,
                    city: user_obj.address.city,
                    address: user_obj.address.address,
                    mobile: user_obj.address.mobile,
                    zip_code: user_obj.address.zip_code,
                    emergency_phone: user_obj.address.emergency_phone,
                    physical_condition : physical_condition ,
                    honors : honors ,
                    certificates : certificates ,
                    activity_time : activity_time ,
                }
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getUserProfileAPI')
                return null
            })
    }


    const getPaymentsAPI = async (
        limit?: number,
        offset?: number,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .get('payments', {limit, offset}, true)
            .then((response: any) => {
                console.log('response: ', response)
                return response.data.content
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getNotificationsAPI')
                return null
            })
    }


    const getCommentVideoListAPI = async (
        limit?: number,
        offset?: number,
        type?: 0 | 1 | 2 ,
        badRequestCallback?: (err?: any) => void,
    ) => {
        return await api
            .get('commentVideoList', {type, limit, offset}, false)
            .then((response: any) => {
                console.log('response: ', response)
                return response.data
            })
            .catch((err) => {
                badRequestCallback
                    ? badRequestCallback(err)
                    : apiErrorMessage(err, 'getCountriesAPI')
                return null
            })
    }


    const checkUserAPI=async( data: any ,badRequestCallback?: (err?: any) => void )=>{
      return await api.post('checkUserName', data , true ).then((response : any)=>{
        return response.data
      }).catch((err)=>{
        badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'checkUserAPI')
        return null
      })
    }

     const searchTrainerAPI=async( data : any ,badRequestCallback?: (err?: any) => void )=>{
      return await api.get('search', data , true ).then((response : any)=>{
        return response.data
      }).catch((err)=>{
        badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'searchTrainerAPI')
        return null
      })
    }

      const addTrainerAPI=async( data : any , athleteField : any , badRequestCallback?: (err?: any) => void )=>{
      return await api.post(['athleteMyField' , athleteField , 'addTrainer' ], data , true ).then((response : any)=>{
        return response
      }).catch((err)=>{
        badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'addTrainerAPI')
        return null
      })
    }

    const getMyPlanAPI=async(badRequestCallback?: (err?: any) => void )=>{
      return await api.get('myPlan', null , true ).then((response : any)=>{
        return response.data.results
      }).catch((err)=>{
        badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getMyPlanAPI')
        return null
      })
    }

    const getMyTransactionsAPI =async(badRequestCallback?: (err?: any) => void )=>{
      return await api.get('myTransactions', null , true ).then((response : any)=>{
        return response.data.results
      }).catch((err)=>{
        badRequestCallback ? badRequestCallback(err) : apiErrorMessage(err, 'getMyPlanAPI')
        return null
      })
    }

    const getAthleteById = async (
      id : any,
      badRequestCallback?: (err?: any) => void,
  ) => {
      return await api
          .get(['athletes' , id ], null , true)
          .then((response: any) => {
              return response.data
          })
          .catch((err) => {
              badRequestCallback
                  ? badRequestCallback(err)
                  : apiErrorMessage(err, 'getAthleteById')
              return null
          })
  }
    
    return {
        getMyPlanAPI ,
        getMyTransactionsAPI ,
        checkUserAPI ,
        addProgressAPI,
        trainerGetProgressAPI,
        signUpAPI,
        getPhrasesAPI,
        getBalancesAPI,
        tokenVerificationAPI,
        getPaymentsAPI,
        getProfileAPI,
        refreshTokenAPI,
        apiErrorMessage,
        getRecordsAPI,
        getMyTrainerProfileAPI,
        answerAthleteRequestsAPI,
        getAthleteRequestAPI,
        getProgressAPI,
        addRecordAPI,
        getMessagesAPI,
        getFieldsAPI,
        addToMyFieldAPI,
        getMyAthleteAPI,
        updateProfileAPI,
        myFieldAPI,
        getTrainerNotifs,
        getAthleteNotifs,
        sendOtpAPI,
        getServerExercises,
        createExerciseAPI,
        getExerciseTypeAPI,
        trainerGetRecordsAPI,
        loginOtpAPI,
        getCoachMyField,
        addToCoachMyFieldAPI,
        removeTrainerMyFieldAPI,
        removeAthleteMyFieldAPI,
        sendExerciseAPI,
        sendMessageAPI,
        removeExerciseAPI,
        removePlanExerciseAPI,
        getExerciseAPI,
        changeExerciseAPI,
        addTofavoritesAPI,
        getfavoritesAPI,
        editProfileAPI,
        submitContactUseMessage,
        getCommentVideoListAPI,
        athleteChartAPI,
        trainerChartAPI,
        searchTrainerAPI ,
        addTrainerAPI ,
        removeFavoriteAPI ,
        myFieldIdAPI ,
        getAthleteById
    }
}

export default useAPI
