import { URL } from '../../../api/useApiCore'
import {
  WhatsappWhiteSVG , InstaWhiteSVG , WebsiteSVG , TeleWhiteSVG
} from '../../../assets/icons/index'
import { ProfileDrawerSVG } from '../../../assets/images/index'
import { BasicColors, log, MainColors, strings } from '../.././../common/index'
import { PressableRadius, Rating, Text } from '../../../components/index'
import useRedux from '../../../hooks/useRedux'
import React, { useEffect, useState } from 'react'
import { Image, Linking, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { Props } from '../models'
import styles from '../styles'
let coachProfile: any
let coachUsername: any

export const useComponent = (props: Props) => {
  const [nameAndFamily, setNameAndFamily] = useState('')
  const [trainerAvatar, setTrainerAvatar] = useState('')
  const [field, setField] = useState('')
  const [trainerCode, setTrainerCode] = useState('')
  const [durationActivity, setDurationActivity] = useState('')
  const [coachingDegree, setCoachingDegree] = useState('')
  const [extraInfo, setExtraInfo] = useState('')
  const [numberOfStars, setNumberOfStars] = useState(0)
  const [whatsappNumber, setWhatsappNumber] = useState('')
  const { Get } = useRedux()
  const { myCoach } = Get().user
  const {
    higherTopCoachView,
    bottomCoachView,
    firstRowInfoView,
    secondRowInfoView,
    lineView,
    aboutCoachText,
    lowerTopCoachView,
    coachProfileImage,
    nameText,
    medalImage,
    lineTopCoachView,
    socialRowView,
  } = styles

  useEffect(() => {
    getTrainerProfile()
  }, [])


  const getTrainerProfile = async () => {
    if (myCoach) {
      const {
        activity_time,
        bio,
        cert,
        code,
        education,
        id,
        user_obj,
        whatsapp_number,
        rating,
        fields_lst,
      } = myCoach
      const { username, email, first_name, profile } = user_obj
      coachUsername = username
      setNameAndFamily(first_name || '')
      setWhatsappNumber(whatsapp_number || '')
      setTrainerAvatar(user_obj?.profile || '')
      setNumberOfStars(rating || 0)
      setTrainerCode(code || '')
      setDurationActivity(activity_time || '')
      setCoachingDegree(education || '')
      setExtraInfo(bio || '')
      let titles = ''
      for (let perField of fields_lst) {
        titles = `${titles} ${perField.field_obj.title}`
      }
      setField(titles)
    }
  }

  const TopCoachProfile = () => {
    return (
      <View style={higherTopCoachView}>
        <View style={lowerTopCoachView}>
          {trainerAvatar == '' ? (
            <Image style={{ alignSelf : 'center' , borderRadius : 54 , borderWidth : 1 , borderColor : 'white' ,width : 109 , height : 109}} source={require('../../../assets/images/athlete5.jpeg')}/>
            // <ProfileDrawerSVG
            //   width={109}
            //   height={109}
            //   style={coachProfileImage}
            // />
          ) : (
            <Image
              style={coachProfileImage}
              source={{ uri: `${URL}${trainerAvatar}` }}
            />
          )}
          <Text
            type="medium"
            size="large"
            style={nameText}
            color={BasicColors.white}>
            {'Sam Smith'}
          </Text>
          <Rating
            numberOfStars={4.5}
            tintColor={MainColors.primary}
            ratingBackgroundColor="blue"
          />
          <Image
            style={medalImage}
            source={require('../../../assets/icons/medal.png')}
          />
          <View style={lineTopCoachView} />
          <SocialMedias />
        </View>
      </View>
    )
  }

  const SocialMedias = () => {
    return (
      <View style={socialRowView}>
        <PressableRadius onPress={() => Linking.openURL(`https://wa.me/${coachUsername}`)}>
          <WhatsappWhiteSVG width={40} height={40} />
        </PressableRadius>
        <PressableRadius wrapperStyle={{ marginHorizontal : 10 }} onPress={() => Linking.openURL(`https://wa.me/${coachUsername}`)}>
          <InstaWhiteSVG width={40} height={40} />
        </PressableRadius>
        <PressableRadius onPress={() => Linking.openURL(`https://wa.me/${coachUsername}`)}>
          <TeleWhiteSVG width={40} height={40} />
        </PressableRadius>
      </View>
    )
  }

  const BottomCoachProfile = () => {
    return (
      <View style={bottomCoachView}>
        <View style={{ flexDirection: 'row' , flexWrap : 'wrap' ,width: '100%' }}>
          <FirstRowInfo />
          <SecondRowInfo />
        </View>
        <View style={lineView} />
        <Text size="small" style={aboutCoachText}>
          {extraInfo}
        </Text>
      </View>
    )
  }

  //   <View style={firstRowInfoView}>
  //   <Text style={{ textAlign : 'left'}} size="medium">
  //    {`${strings.coachCodee}: `}
  //    {trainerCode}
  //  </Text>
  //  <Text style={{ textAlign : 'left'}} size="medium">
  //    {`${strings.sportField} :`}
  //    {'field'}
  //  </Text> 
  // </View> */}

  const FirstRowInfo = () => {
    return (

      <View style={{  paddingLeft : '4%' , width : '50%' }}>
        <Text style={{ marginTop : 30 , marginBottom : 10 }}>
          {`${strings.coachCodee}:  215`}
        </Text>
        <Text>
          {`${strings.durationOfActivity} : `}
          {durationActivity}
         2 {strings.year}
        </Text>

      </View>
    )
  }

  const SecondRowInfo = () => {
    return (
      <View style={{ paddingLeft : '4%' , paddingRight : '4%' , width : '50%' }}>
        <Text  style={{ marginTop : 30 ,marginBottom : 10 }}>
          {`${strings.degreeCoach} : `}
          {'Bachelor'}
        </Text>
        <Text >
          {`${strings.sportField} :`}
          {'Basketball'}
        </Text>

      </View>
    )
  }


  return {
    TopCoachProfile,
    BottomCoachProfile,
  }
}

export default useComponent
