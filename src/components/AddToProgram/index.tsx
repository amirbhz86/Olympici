import { ConfirmIconSVG } from '../../assets/icons/index'
import { strings } from '../../common/languages'
import { Text } from '../../components/index'
import React, { memo } from 'react'
import { Props } from './models'
import styles from './styles'

const AddToProgram = (props: Props) => {
  const { containerView, addToProgramText } = styles
  return (
    <>
      <ConfirmIconSVG />
      <Text style={addToProgramText} type="medium" size="large">
        {strings.addToProgram}
      </Text>
    </>
  )
}

export default memo(AddToProgram)
