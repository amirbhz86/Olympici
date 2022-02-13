import { strings , log } from '../../../common/index'
import { useAPI , useRedux } from '../../../hooks/index'
import { useState } from 'react'
import { showMessage } from 'react-native-flash-message'
import { useFocusEffect } from '@react-navigation/native'
import React from 'react'

export const useComponent = ({
  navigation,
}: {
  navigation: any
}) => {
  const [titleMessage, setTitleMessage] = useState('')
  const [contentMessage, setContentMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const { sendMessageAPI } = useAPI()
  const { Save } = useRedux()

  const sendMessage = async () => {
    if (titleMessage === '' || contentMessage === '') {
      showMessage({
        message: strings.titleAndTextOfMessageNotBeeEmpty,
        type: 'danger',
        duration: 3000,
      })
      return
    }

    setLoading(true)
    let sendData = {
      body: contentMessage,
      title : titleMessage ,

    }

    const sendResult = await sendMessageAPI(sendData)

    if (sendResult) {
      setContentMessage('')
      setTitleMessage('')
      showMessage({
        message: strings.sendMessageSuccessfully,
        type: 'success',
        duration: 2500,
      })
      navigation.goBack()
    } else {
      showMessage({
        message: strings.errorMessage,
        type: 'danger',
        duration: 2500,
      })
    }
    setLoading(false)
  }


  useFocusEffect(
    React.useCallback(() => {
       Save({ selectedTab : 'Message' },'app')
    }, []),
  )

  return {
    titleMessage,
    contentMessage,
    loading,
    setTitleMessage,
    setContentMessage,
    sendMessage,
  }
}

export default useComponent
