import { servicesMiddleMenu, servicesTopMenu, strings } from '../../common/index'
import {
  ChampionHeader,
  FadingModal,
  RowItem,
  ServicesBottomMenu,
  ServicesMiddleMenu,
  ServicesTopMenu,
  SportsList,
  Text
} from '../../components/index'
import {
   VolleyballSVG , ShootingSVG , BadmintonSVG , RunningSVG ,
   TaekwondoSVG ,
    } from '../../assets/icons/index'
import React from 'react'
import { View, ScrollView } from 'react-native'
import useContainer from './hooks'
import styles from './styles'
import { servicesBottomMenu } from '../../common/index'

const sportArray =[
  {
    field_obj : {
      id : '1' ,
      title : strings.volleyball ,
      images : [ { image : <VolleyballSVG /> }]
    } ,
    id : '1' ,
  },
  {
    field_obj : {
      id : '2' ,
      title : strings.shooting ,
      images : [ { image : <ShootingSVG/> }]
    } ,
    id : '2' ,
  },
  {
    field_obj : {
      id : '4' ,
      title : strings.badminton ,
      images : [ { image : <BadmintonSVG/> }]
    } ,
    id : '4' ,
  },
  {
    field_obj : {
      id : '3' ,
      title : strings.running ,
      images : [ { image : <RunningSVG/> }]
    } ,
    id : '3' ,
  },
  {
    field_obj : {
      id : '3' ,
      title : strings.taekwondo ,
      images : [ { image : <TaekwondoSVG/> }]
    } ,
    id : '3' ,
  }
]

const AthleteServices = (props: any) => {
  const { navigation, route } = props
  console.log('athlete services');

  const {
    containerView,
    topMenu,
    styleScrollView,
    olimpiciServicesText,
    choosingSportContainer,
  } = styles

  const {
    oppositeStatus,
    choosingSportStatus,
    setTopMenuTitle,
    topMenuTitle,
    onPressSportList,
    myField,
    iconPath,
  } = useContainer(route)

  return (
    <View style={containerView}>
      <ChampionHeader navigation={navigation} />
      <ScrollView style={styleScrollView}>
        <ServicesTopMenu
          iconPath={iconPath}
          navigation={navigation}
          flatListData={servicesTopMenu}
          sportSelected={topMenuTitle}
          oppositeStatus={oppositeStatus}
          status={choosingSportStatus}
        />
        <ServicesMiddleMenu
          navigation={navigation}
          flatListData={servicesMiddleMenu}
        />
        <Text type={'bold'} size="large" style={olimpiciServicesText}>
          {strings.olimpiciServices}
          {' :'}
        </Text>
         <ServicesBottomMenu flatlistData={servicesBottomMenu} navigation={navigation} />
        <FadingModal
          status={choosingSportStatus}
          backgroundonPress={oppositeStatus}>
          <View style={choosingSportContainer}>
            <RowItem
              onPress={() => { }}
              where="sportList"
              fieldName={strings.chooseSport}
              style={{ borderRadius: 13 }}
            />
            <SportsList
              userType={'athlete'}
              data={sportArray}
              onPress={onPressSportList}
            />
          </View>
        </FadingModal>
      </ScrollView>
    </View>
  )
}

export default AthleteServices
