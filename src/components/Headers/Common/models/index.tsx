export interface Props {
  headerType?: 'myExercise' | 'personalInfo' | 'chartDisplay' | 'fourIcon'
  headerTitle?: string
  style?: any
  navigation?: any
  onPress?: any 
  titleSize ?: any
  notifCounterStatus : boolean
}

export type HeaderType =
  | 'myExercise'
  | 'personalInfo'
  | 'chartDisplay'
  | 'fourIcon'
