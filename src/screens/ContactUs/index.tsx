import { strings } from '../../common/index'
import { 
  ContactCard,
   PrymaryHeader, Text } from '../../components'
import React from 'react'
import { ScrollView, View } from 'react-native'
import useCotainer from './hooks/useContainer'
import { Props } from './models'
import styles from './styles'

const ContactUs = (props: Props) => {
  const {
    containerView,
    bodyView,
    contentBodyView,
    extraCallUsRowView,
    SendMessagePress,
    followUsText,
  } = styles
  const { contactInformation, AddressSection, SocialRow, AppLaw } = useCotainer()
  const { navigation } = props
  return (
    <View style={containerView}>
      <PrymaryHeader
        navigation={navigation}
        hasBack
        title={strings.contactUsHeader}
      />
      <ScrollView style={bodyView} contentContainerStyle={contentBodyView}>
        <ContactCard value={'example21@gmail.com'} style={extraCallUsRowView} type={'email'} />
        <ContactCard value={'+1462837676'} type={'phoneCall'} />
        <ContactCard
          style={SendMessagePress}
          type={'message'}
          navigation={navigation}
        /> 
        <ContactCard
          style={SendMessagePress}
          type={'map'}
          navigation={navigation}
        /> 
        {/* <AddressSection /> */}
        <Text type={'medium'} style={followUsText} size={'medium'}>
          {strings.followUsSocialMedia}
        </Text>
        <SocialRow />
        <AppLaw />
      </ScrollView>
    </View>
  )
}

export default ContactUs
