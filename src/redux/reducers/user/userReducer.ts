import {
  USER_CHANGE_DATA,
  USER_INSERT_DATA,
  USER_RESET_DATA,
} from '../../actions/user/actionType'
import { UserStates } from './models'
// import { }
const INITIAL_STATE: any = {
  exerciseObject: {
    focusedItem: undefined,
    items: [
      {
        id: '1',
        exercise_obj: {
          description : 'This exercise should be done in the morning' ,
          title: 'exercise 1',
          time: '12 min',
          id: '1',
        },
        is_done: true,
        leftTitle: 'dd'
      },
      {
        id: '2',
        exercise_obj: {
          files : [
            {efile : require('../../../assets/video/video1.mp4') , time :'12 min' , type : 'VIDEO'} ,
            {efile : require('../../../assets/images/exercise.jpeg') , time :'' , type : 'IMAGE'} , 
          ] ,
          description : 'This exercise should be done in the morning' ,
          title: 'exercise 2',
          time: '24 min',
          id: '2',
        },
        is_done: false,
        leftTitle: 'dd'
      },
      {
        id: '3',
        exercise_obj: {
          description : 'This exercise should be done in the morning' ,
          title: 'exercise 3',
          time: '35 min',
          id: '3',
        },
        is_done: false,
        leftTitle: 'dd'
      }
    ],
  },
  completedExercise: [
    {
      id: '1',
      exercise_obj: {
        description : 'This exercise should be done in the morning' ,
        title: 'exercise 1',
        time: '12 min',
        id: '1',
      },
      is_done: true,
      leftTitle: 'dd'
    }
  ],
  otherExercise: [
    {
      id: '2',
      exercise_obj: {
        files : [
          {efile : require('../../../assets/video/video1.mp4') , time :'12 min' , type : 'VIDEO'} ,
          {efile : require('../../../assets/images/exercise.jpeg') , time :'' , type : 'IMAGE'} , 
        ] ,
        description : 'This exercise should be done in the morning' ,
        title: 'exercise 2',
        time: '24 min',
        id: '2',
      },
      is_done: false,
      leftTitle: 'dd'
    },
    {
      id: '3',
      exercise_obj: {
        description : 'This exercise should be done in the morning' ,
        title: 'exercise 3',
        time: '35 min',
        id: '3',
      },
      is_done: false,
      leftTitle: 'dd'
    }
  ],
  newNotif: false,
  notifications: [],
  myField: [],
  userType: undefined,
  allExerciseObject: {
    focusedItem: undefined,
    items: undefined,
  },
  exerciseFile: [],
  createExerciseData: {
    description: undefined,
    title: undefined,
    time: undefined,
    type: undefined,
  },
  exercisesOfDay: [],
  savedExercise: [],
  username: '',
  gender: '2',
  email: '',
  fields_lst: [],
  userProfile: '',
  id: '',
  avatar: null,
  fullName: '',
  mobile: '',
  myCoach: {
    id: null,
    bio: '',
    activity_time: '',
    cert: '',
    code: '',
    education: '',
    user_obj: {
      username: '',
      email: '',
      first_name: '',
      profile: ''
    },
    whatsapp_number: '',
    fields_lst: '',
    rating: 0,
  }
}

export default (
  state = INITIAL_STATE,
  action: { type: string; value?: UserStates },
) => {
  switch (action.type) {
    case USER_CHANGE_DATA:
      return { ...state, ...action.value }

    case USER_INSERT_DATA:
      return { ...state, ...action.value }

    case USER_RESET_DATA:
      return INITIAL_STATE
    default:
      return state
  }
}
