import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

const scale = (size) => (width / guidelineBaseWidth) * size
const vs = (size) => (height / guidelineBaseHeight) * size

const vsf = (size, factor = 0.1) => size + (vs(size) - size) * factor

const ms = (size, factor = 0.1) => size + (scale(size) - size) * factor

export { scale, vs, ms, vsf }
