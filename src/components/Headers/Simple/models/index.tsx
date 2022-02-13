export interface Props {
  headerType?: 'myExercise' | 'personalInfo' | 'chartDisplay' | 'fourIcon'
  headerTitle?: string
  style?: any
  navigation?: any
  onPress?: any
  title?: string
  showProfile?: boolean
  noRadius?: boolean
  profilePath?: string | 'noThing'
}

export type HeaderType =
  | 'myExercise'
  | 'personalInfo'
  | 'chartDisplay'
  | 'fourIcon'
