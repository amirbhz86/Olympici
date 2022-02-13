import { useRedux } from '../../../hooks/index'
import { useEffect, useState } from 'react'

export const useComponent = ({
  setLapArray,
  lapNumber,
}: {
  setLapArray: any
  lapNumber: any
}) => {
  const [stopwatchReset, setStopwatchReset] = useState(false)
  const [stopwatchStart, setStopwatchStart] = useState(false)
  const { Save, Get } = useRedux()
  const { stopwatchStatus } = Get().app

  const toggleStopwatch = () => {
    setStopwatchStart(true)
    setStopwatchReset(false)
    Save({ stopwatchStatus: 'start' }, 'app')
  }

  const stopStopwatch = () => {
    Save({ stopwatchStatus: 'stop' }, 'app')
    setStopwatchStart(false)
  }

  return {
    stopwatchReset,
    setStopwatchReset,
    stopwatchStart,
    setStopwatchStart,
    toggleStopwatch,
    // resetStopwatch,
    stopStopwatch,
    stopwatchStatus,
  }
}

export default useComponent
