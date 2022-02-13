import { URL } from '../../api/useApiCore'
import {
  AngleBracketLeftSVG,
  BoldLeftArrowSVG,
  DownArrowSVG,
  RightArrowSVG ,
  LittleLeftGreenSVG
} from '../../assets/icons'
import { strings } from '../../common/index'
import { PressableRadius, Text } from '../../components/index'
import React, { memo } from 'react'
import { Image, View } from 'react-native'
import useComponent from './hooks'
import { Props } from './models'
import styles from './styles'

const RowItem = (props: Props) => {
  const {
    type,
    onPress,
    style,
    sportList,
    where,
    fieldName,
    id,
    athleteField,
    trainerPhone,
    fieldIcon,
    innerStyle,
    userType,
  } = props

  const { wrapperRowItem, contentRowItem, iconAndTitleView } = styles

  const { renderSportItem } = useComponent()

  // const { sportTitle, SportIcon } = renderSportItem(type)
// log(fieldIcon[])
  return (
    <PressableRadius
      onPress={() =>
        onPress( athleteField , fieldName , fieldIcon )
      }
      style={[contentRowItem , innerStyle , { borderRadius :  fieldName == strings.chooseSport || where!=='sportList'  ? 20 : 0  }]}
      wrapperStyle={[wrapperRowItem, style]}>
      {fieldName == strings.chooseSport && where !== 'topMenuHeader' && (
        <DownArrowSVG width={13} height={6.48} />
      )}
      {fieldName !== strings.chooseSport && where !== 'topMenuHeader' && (
        // <AngleBracketLeftSVG width={4.5} height={8.35} />
        <LittleLeftGreenSVG width={19.5} height={25.35} />
      )}
      {where == 'topMenuHeader' && <Image style={{ width : 20 , height : 10 }} source={require('../../assets/icons/right-arrow2.png')} />} 
      <View style={iconAndTitleView}>
        <Text
          style={{ alignSelf: 'center' }}
          type={fieldName == strings.chooseSport ? 'bold' : 'medium'}>
          {fieldName}
        </Text>
        {fieldName !== strings.chooseSport && (
          <View
            style={{
              width: where == 'topMenuHeader' ? 35 : 49.5,
              alignItems: 'flex-end',
              // backgroundColor : 'red' ,
            }}>
          {fieldIcon}
            {/* <Image
              style={{ width: 30, height: 30 }}
              source={{ url: `${URL}${fieldIcon}` }}
            /> */}
          </View>
        )}
      </View>
    </PressableRadius>
  )
}

export default memo(RowItem)
