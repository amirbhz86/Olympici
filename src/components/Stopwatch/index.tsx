import { stopwatchOptions } from '../../common/index'
import { useRedux } from '../../hooks/index'
import React, { forwardRef, memo } from 'react'
import { View } from 'react-native'
import { Stopwatch } from 'react-native-stopwatch-timer'
import useComponent from './hooks'
import { Props } from './models'
let stopwatchTime: any,
  lapNumber = 0

const CustomStopwatch = forwardRef((props: Props, ref) => {
  const { setLapArray } = props
  const {
    stopwatchStart,
    stopwatchReset,
    toggleStopwatch,
    stopStopwatch,
    setStopwatchStart,
    setStopwatchReset,
  } = useComponent({ setLapArray, lapNumber })
  const { Save, Get } = useRedux()

  const resetStopwatch = () => {
    setStopwatchStart(false)
    setStopwatchReset(true)
    Save({ stopwatchStatus: 'stop' }, 'app')
    setLapArray([{ value: 0, space: 0 }])
    lapNumber = 0
  }

  const addLap = () => {
    setLapArray((prev: any) => {
      if (stopwatchTime !== undefined && 'value' in prev[lapNumber]) {
        lapNumber++
        return [
          ...prev,
          {
            value: stopwatchTime,
            space: stopwatchTime - prev[lapNumber - 1].value,
          },
        ]
      } else {
        return prev
      }
    })
  }

  React.useImperativeHandle(ref, () => ({
    resetStopwatch,
    toggleStopwatch,
    stopStopwatch,
    addLap,
  }))

  return (
    <View style={[{ zIndex: 4 }]}>
      <Stopwatch
        laps
        // msecs
        startTime={0}
        start={stopwatchStart}
        reset={stopwatchReset}
        options={stopwatchOptions}
        getMsecs={(time: any) => {
          stopwatchTime = time
        }}
      />
    </View>
  )
})

export default memo(CustomStopwatch)
