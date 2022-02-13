import { useRedux } from '../../../../hooks/index'
import { useState } from 'react'

export const useComponent = (props) => {
  const { Get, Save } = useRedux()

  // const [ selectedTab , setSelectedTab ] = useState<'Home' | 'Auth' | 'ContactUs' | 'Message'>('Home')
  const addToProgram = () => {
    Save(
      {
        addToProgramModal: true,
        hideTabbar: true,
      },
      'app',
    )
  }
  return {
    addToProgram,
    // setSelectedTab ,
    // selectedTab ,
  }
}

export default useComponent
