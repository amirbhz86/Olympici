export interface Props {
    navigation: any
    data?: Data[]
}

export interface ComponentInput {
    navigation: any
    data?: Data[]
}

export type Data = {
    id: number
    name: string
    cover: string
    video: string
    brief_desc: string
}
