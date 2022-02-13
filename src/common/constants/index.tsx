import {
  AddAthleteSVG,
  BoughtPlanSVG,
  CallAthleteSVG,
  ContactCoachSVG,
  ContractSVG,
  ExcercisesSVG,
  ExerciseListSVG,
  InviteFriendsSVG,
  MessagesSVG,
  MyAthletesSVG,
  MyCoachSVG,
  MyFinancialTransactionSVG,
  MyProgressSVG,
  MyRecordsSVG,
  PaymentOfMembershipFeeSVG,
  PayTheCoachTuitionSVG,
  PsychologyTestSVG,
  SendMessageSVG,
  SendProgramSVG,
  ShowRecordGraphSVG,
  SportInsuranceSVG,
  StopWatchSVG,
  TalentFormSVG, UserSVG,
  WebinarSVG,
  RequestTrainerSVG,
} from '../../assets/icons/index'
import { ms } from '../../helper/sizing'
import { getTabBarHeight } from '../../helper/statusBarHeight'
import React from 'react'
import { Dimensions, Image, Platform } from 'react-native'
import { strings } from '../languages/index'

export const screenH = Dimensions.get('screen').height
export const screenW = Dimensions.get('screen').width
export const windowH = Dimensions.get('window').height
export const windowW = Dimensions.get('window').width

export const KEYS = {
  STORAGE: {
    TOKENS: '@tokens',
    BADGE: '@badge_count',
    AUTH_INFO: '@auth_info',
    ATHLETE_FIELD: '@athlete_field',
    TRAINER_FIELD: '@trainer_field',
  },
}

export const OS = Platform.OS
export const FONT_NAME = 'Lato'
export const FONT_TYPE = {
  light: `${FONT_NAME}-Light`,
  medium: `${FONT_NAME}-Medium`,
  Regular: `${FONT_NAME}-Regular`,
  bold: `${FONT_NAME}-Bold`,
}

export const FONT_SIZES: {
  headingLargeTitle: number
  headingTitle: number
  heading: number
  large: number
  medium: number
  small: number
  xSmall: number
  xxSmall: number
} = {
  headingLargeTitle: 30,
  headingTitle: 25,
  heading: 20,
  large: 18,
  medium: 16,
  small: 14,
  xSmall: 12,
  xxSmall: 10,
}

export const LANGUAGES_LIST = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Persian',
    value: 'fa',
  },
]

export const FIELDS_LENGTH = {
  email: {
    minLength: 10,
    maxLength: 50,
  },
}

export const completedExercise=[
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
]

export const exerciseObject =  {
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
          {efile : require('../../assets/video/video1.mp4') , time :'12 min' , type : 'VIDEO'} ,
          {efile : require('../../assets/images/exercise.jpeg') , time :'' , type : 'IMAGE'} , 
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
}

export const otherExercise = [
  {
    id: '2',
    exercise_obj: {
      files : [
        {efile : require('../../assets/video/video1.mp4') , time :'12 min' , type : 'VIDEO'} ,
        {efile : require('../../assets/images/exercise.jpeg') , time :'' , type : 'IMAGE'} , 
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
]

const APP_STORE = {
  link: 'https://apps.apple.com/ca/app/',
}
const PLAY_STORE = {
  link:
    'https://play.google.com/store/apps/details?id=com.supercell.clashofclans',
}
export const STORES = OS === 'android' ? PLAY_STORE : APP_STORE

export const bottomSheetSnapPoint = windowH - 587 - getTabBarHeight()

export const persianDigits = '۰۱۲۳۴۵۶۷۸۹'

export const persianMap = persianDigits.split('')

export const CONFIGURATION_REFRESH_TOKEN = {
  grant_type: 'refresh_token',
  client_secret: 'web',
  client_id: 'web',
}

export const onlyStringRegex = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z\]+[' ']+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_]*$/g

export const genderDropdownData = [
  { value: strings.male } ,
  { value: strings.female }
]


export const CUSTOM_PATH =
  'file:///storage/emulated/0/Android/data/com.sporty/files/Pictures/'



export const userAccountServices=[{
  title: strings.fieldInfo,
  icon: <Image style={{ width : 40 , height:40 }} source={require('../../assets/icons/soccer-field.png')} />,
  screenName: 'FieldInfo',
},{
  title: strings.contactInfo,
  icon: <Image style={{ width : 40 , height:40 }} source={require('../../assets/icons/contact.png')} />,
  screenName: 'ContactInfo',
},{
  title: strings.informations,
  icon: <Image style={{ width : 40 , height:40 }} source={require('../../assets/icons/personal-information.png')}  />,
  screenName: 'PersonalInfo',
}]

export const talksCardsData = [
  {
    name: '',
    title: strings.championAndMemberOfTheNationalTeam,
  },
  {
    name: '',
    title: strings.championAndMemberOfTheNationalTeam,
  },
  {
    name: '',
    title: strings.championAndMemberOfTheNationalTeam,
  },
  {
    name: '',
    title: strings.championAndMemberOfTheNationalTeam,
  },
  {
    name: '',
    title: strings.championAndMemberOfTheNationalTeam,
  },
  {
    name: '',
    title: strings.championAndMemberOfTheNationalTeam,
  },
]

export const servicesTopMenu = [
  {
    title: strings.messages,
    icon: <MessagesSVG />,
    screenName: 'Notifs',
  },
  {
    title: strings.contactCoach,
    icon: <ContactCoachSVG />,
    screenName: 'callTrainer',
  },
  {
    title: strings.excercises,
    icon: <ExcercisesSVG />,
    screenName: 'ExercisesList',
  },
]

export const coachServicesTopMenu = [
  {
    title: strings.myAthletes,
    icon: <MyAthletesSVG />,
    screenName: 'MyAthletes',
  },
  {
    title: strings.addAthlete,
    icon: <AddAthleteSVG />,
    screenName: 'addToMyAthletes',
  },
  {
    title: strings.exerciseList,
    icon: <ExerciseListSVG />,
    screenName: 'CoachExerciseList',
  },
]

export const coachServicesMiddleMenu = [
  {
    title: strings.inviteFriends,
    icon: <InviteFriendsSVG />,
    screenName: 'InviteFriend',
  },
  {
    title: strings.stopwatch,
    icon: <StopWatchSVG />,
    screenName: 'StopwatchScreen',
  },
  {
    title: strings.webinar,
    icon: <WebinarSVG />,
    screenName: 'Webinar',
  },
]

export const servicesMiddleMenu = [
  {
    title: strings.myProgress,
    icon: <MyProgressSVG />,
    screenName: 'MyProgress',
  },
  {
    title: strings.showRecordGraph,
    icon: <ShowRecordGraphSVG />,
    screenName: 'ChartDisplay',
  },
  {
    title: strings.myRecords,
    icon: <MyRecordsSVG />,
    screenName: 'RecordsList',
  },
  {
    title: strings.webinar,
    icon: <WebinarSVG />,
    screenName: 'Webinar',
  },
  {
    title: strings.stopWatch,
    icon: <StopWatchSVG />,
    screenName: 'StopwatchScreen',
  },
  {
    title: strings.myCoach,
    icon: <MyCoachSVG />,
    screenName: 'CoachProfile',
  },
  {
    title: strings.payTheCoachTuition,
    icon: <PayTheCoachTuitionSVG />,
    screenName: 'PayTheCoachTuition',
  },
  {
    title: 'My Transactions',
    icon: <BoughtPlanSVG />,
    screenName: 'AthleteTransactions',
  },
]

export const coachServicesBottomMenu = [
  {
    title: strings.sportInsurance,
    icon: <SportInsuranceSVG />,
    screenName: 'SportInsurance',
  },
  {
    title: strings.inviteFriends ,
    icon: <InviteFriendsSVG /> ,
    screenName: 'InviteFriend',
  },
  {
    title: strings.talentForm,
    icon: <TalentFormSVG />,
    screenName: 'TalentForm',
  },
  {
    title: strings.psychologyTest,
    icon: <PsychologyTestSVG />,
    screenName: 'PsychologyTest',
  },
]

export const servicesBottomMenu = [
  {
    title: strings.sportInsurance,
    icon: <SportInsuranceSVG />,
    screenName: 'SportInsurance',
  },
  {
    title: strings.requestTrainer ,
    icon: <RequestTrainerSVG />  ,
    screenName: 'SearchTrainer' ,
  },
  {
    title: strings.inviteFriends ,
    icon: <InviteFriendsSVG /> ,
    screenName: 'InviteFriend',
  },
  {
    title: strings.talentForm,
    icon: <TalentFormSVG />,
    screenName: 'TalentForm',
  },
  {
    title: strings.psychologyTest,
    icon: <PsychologyTestSVG />,
    screenName: 'PsychologyTest',
  },
]

export const sportsList = [
  'select',
  'volleyball',
  'shooting',
  'badminton',
  'running',
  'taekwondo',
]

export const sportsDropdown = [
  'volleyball',
  'shooting',
  'badminton',
  'running',
  'taekwondo',
]

export const daysOfWeek = [
  'Friday',
  'Tursday',
  'Wednsday',
  'Tuesday',
  'Monday',
  'Sunday',
  'Saturday',
]

export const completedExercises = [
  {
    title: strings.exerciseTitle,
    bottomTitle: 'ق.ظ۹:۳۹',
    type: 'completed',
  },
]

export const exercises = [
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'completed',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'normal',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'saved',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'saved',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'saved',
  },
]

export const myAtheltes = [
  {
    name: 'محمدرضایی',
    sport: 'تکواندو',
    profile: (
      <UserSVG width={25} height={25} />
    ),
  },
  {
    name: 'محمدرضایی',
    sport: 'تکواندو',
    profile: (
      <UserSVG width={25} height={25} />
    ),
  },
  {
    name: 'محمدرضایی',
    sport: 'تکواندو',
    profile: (
      <UserSVG width={25} height={25} />
    ),
  },
  {
    name: 'محمدرضایی',
    sport: 'تکواندو',
    profile: (
      <UserSVG width={25} height={25} />
    ),
  },
  {
    name: 'محمدرضایی',
    sport: 'تکواندو',
    profile: (
      <UserSVG width={25} height={25} />
    ),
  },
  {
    name: 'محمدرضایی',
    sport: 'تکواندو',
    profile: (
      <UserSVG width={25} height={25} />
    ),
  },
  {
    name: 'محمدرضایی',
    sport: 'تکواندو',
    profile: (
      <UserSVG width={25} height={25} />
    ),
  },
]

export const exercisePrograms = [
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'checkbox',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'checkbox',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'checkbox',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'checkbox',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'checkbox',
  },
]

export const myProgram = [
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'program',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'program',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'program',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'program',
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'program',
  },
]

export const markedExercises = [
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه' ,
    type: 'markedExercises' ,
  },
  {
    title: strings.exerciseTitle,
    bottomTitle: '15 دقیقه',
    type: 'markedExercises',
  },
  {
    title: strings.exerciseTitle ,
    bottomTitle: '15 دقیقه',
    type: 'markedExercises',
  },
]

export const dropdownUserType = [
  { value: strings.athlete },
  { value: strings.trainer }
]

export const periodTimeDropdown = [
  {
    value: strings.Aweek,
  },
  {
    value: strings.Ayear,
  },
  {
    value: strings.Amonth,
  },
]

export const exerciseLevels = [
  {
    value: strings.simple,
  },
  {
    value: strings.medium,
  },
  {
    value: strings.hard,
  },
]

export const notifications = [
  {
    title: 'لورم ایپسوم ساختگی',
    date: '2020/07/08',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    title: 'لورم ایپسوم ساختگی',
    date: '2020/06/05',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    title: 'لورم ایپسوم ساختگی',
    date: '2020/04/21',
    text:
       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
  {
    title: 'لورم ایپسوم ساختگی',
    date: '2020/04/20',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  },
]

export const records = [
  {
    recordValue: '۳۴:۱۲',
    date: '۹۹/۰۹/۲۶',
    detail:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان لازم استو و برای شرایط فعلی',
  },
  {
    recordValue: '۳۴:۱۲',
    date: '۹۹/۰۹/۲۶',
    detail:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان لازم استو و برای شرایط فعلی',
  },
  {
    recordValue: '۳۴:۱۲',
    date: '۹۹/۰۹/۲۶',
    detail:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان لازم استو و برای شرایط فعلی',
  },
]

export const exerciseFiles = [
  {
    time: '۳ دقیقه',
    name: 'فایل صوتی ارسال شده ',
  },
  {
    time: '۳ دقیقه',
    name: 'فایل صوتی ارسال شده ',
  },
  {
    time: '۳ دقیقه',
    name: 'فایل صوتی ارسال شده ',
  },
]

export const servicesAthleteProfile = [
  {
    title: strings.sendMessage,
    icon: <SendMessageSVG />,
    screenName: 'CoachSendMessage',
  },
  {
    title: strings.callAthlete,
    icon: <CallAthleteSVG />,
    screenName: 'callAthlete',
  },
  {
    title: strings.sendProgram,
    icon: <SendProgramSVG />,
    screenName: 'Programs',
  },
  {
    title: strings.pprogress,
    icon: <MyProgressSVG />,
    screenName: 'AddProgress',
  },
  {
    title: strings.showRecordGraph,
    icon: <ShowRecordGraphSVG />,
    screenName: 'ChartDisplay',
  },
  {
    title: strings.records,
    icon: <MyRecordsSVG />,
    screenName: 'CoachRecordList',
  },
  {
    title: strings.boughtPlan,
    icon: <BoughtPlanSVG />,
    screenName: 'AthletePlan',
  },
]

export const readMoreOlympici =
  'با اپلیکیشن "المپیکی"، همواره احساسی نو و متفاوت از هدف گذاری و برنامه ریزی را بصورت حرفه ای و هوشمند تجربه خواهید کرد زیرا همه چیز بر پایه رسیدن به هدف شما طراحی و برنامه ریزی شده است. گرافیک اپلیکیشن المپیکی با حفظ ارتباط معنادار با عناصر طبيعی، دسترسی آسان به تمامی امکانات، داشبود شخصی، پرداخت های مالی و بخش نمودار های ارزیابی تمرینات و مسابقات بصورت حرفه ای، حفظ کامل حریم شخصی کاربر و بالاتر از همه، ارائه خدمات عالی توسط مربیان خانم و آقا بصورت حرفه ای، در جهت شکوفایی استعداد ورزشکاران، انتقال تجربیات مربیان و ایجاد رابطه ای پایدار بین مربیان و ورزشکارن گرامی است.'

export const DEFAULT_LOGIN_CONFIG = {
  client_id: 'web',
  client_secret: 'web',
  grant_type: 'password',
}
