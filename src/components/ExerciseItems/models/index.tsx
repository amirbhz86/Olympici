export interface Item {
  title: string
  bottomTitle: string
  type: 'completed' | 'saved' | 'normal'
}

export interface Props {
  navigation: any
  exerciseData: any[]
  style?: any
  where: 'selectExercises' | 'coachExercises' | 'exerciseOfDay' | undefined ,
  height : number 
}
